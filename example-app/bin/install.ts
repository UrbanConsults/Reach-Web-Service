export default (rws: any, db: any, fs: any, mail: any, elasticSearch: any) => { // install
        
    rws.addCronJob("* * * * *", async () => {

    });

    rws.addChannelListener("channel-name", async () => {

    });

    rws.addComponent("g-form", {
        title: "Gravity Forms Form",
        description: "Display a gravity form",
        options: async () => {
            const options = await RWS.getOptions({});
            await RWS.saveOptions({});
            return `<div></div>`;
        },
        render: async (args) => {
            const options = await RWS.getOptions();
            return `<div>${args.id}</div>`;
        }
    });

    rws.addAction("route", async (headers, other, args) => {

    }, 10);

    rws.addFilter("filter_name", async () => {

    }, 10);

    // only works with DB native module
    db.migrate(1 /* current migration version */, async (migrate) => {

        // make previous version of migration available
        // migrate.old_version = 0
        
        await migrate.newComp({
            name: "login",
            secure: false,
            model: {
                type: "table",
                columns: [
                    ["username", {type: "string"}],
                    ["email", {type: "string"}],
                    ["phone", {type: "string"}]
                ]
            }
        });

        // user id index
        await migrate.newIndex({
            extend: "users",
            name: "login-index",
            watch: "login", // component to watch?
            data_type: "string(32)", // string(25), decimal(2), geo(4), uint8, etc
            value: (insert, loginComponent) => {
                [
                    loginComponent.username,
                    loginComponent.email,
                    loginComponent.phone
                ].filter(v => v && v.length).forEach(v => {
                    insert(String(v).toLowerCase());
                });
            }
        });

        await migrate.newType({
            name: "order-totals-by-day",
            keyModel: {type: "u64"},
            defaultComps: ["order-count"]
        });

        await migrate.newComp({
            name: "order-count",
            model: {type: "u64"},
            secure: false
        });

        await migrate.newIndex({
            extend: "order-totals-by-day",
            name: "order-count-index",
            watch: "order-count",
            data_type: "u64",
            value: (index, orderCountComp) => {
                index.add(orderCountComp);
            }
        });

        await migrate.newTrigger({
            name: "user-search-index",
            watch: "users.user-data",
            call: async (userData) => {
                await elasticSearch.update(userData);
            }
        })

        await migrate.newAggregate({
            name: "calculate-daily-orders", 
            watch: "order.order-data", // watch what type & component?
            apply: "order-totals-by-day.order-count", // which type are we modifying?
            key: (orderData) => {
                return orderData.day;
            },
            value: (isNewRecord, orderData, oldOrderCount) => {
                if (!oldOrderCount) {
                    oldOrderCount = 0;
                }
                if (isNewRecord) {
                    oldOrderCount++;
                } else {
                    return false; // don't update anything
                }
                return oldOrderCount;
            }
        });

        await migrate.newIndex({
            extend: "blogs",
            name: "authors",
            watch: "blog-post-data",
            data_type: "ulid",
            value: (index, blogPostData) => {
                index.add(blogPostData.authorID);
            }
        });

        // app index usage 
        // compIndex.entityType
        // let users = await db.select(["id", "or", "other", "components"]).fromIndex("user-id.users").find(["=", "login@gmail.com"], {limit: 1});
        let users = await db.select(["id", "or", "other", "components"]).from("users").all({limit: 1});
        users = await db.select(["id", "or", "other", "components"]).from("users").find(["=", "entity ID"], {limit: 1});
        users = await db.select(["id", "or", "other", "components"]).from("users").find(["BETWEEN", ["lower ID", "higher ID"]], {limit: 1});
        // use index
        users = await db.select(["id", "or"]).from("users.login-index").find(["=", "user@gmail.com"], {limit: 1});
        
        // graph API
        users = await db.select(["id", "or", "other", {
            key: "blog-posts",
            query: ["id", async (id_comp) => {
                return await db.select(["blog-post-data"]).from("blogs.authors").find(["=", id_comp], {limit: 5})
            }]
        }]).from("users").find(["BETWEEN", ["lower ID", "higher ID"]], {limit: 1});
        
        /*
        users = await db.select(["id", "or", "other", "components"]).fromAggr("post-count.users").find(["BETWEEN", ["lower ID", "higher ID"]], {limit: 1});
        
        // get users, blog-post[] => user
        users = await db.select(["id", "or", "other", "components"]).fromRel("blog-author.users").find(["=", "entity blog-post ID"], {limit: 1});
        // get blogs, blog-post[] <= user
        users = await db.select(["id", "or", "other", "components"]).fromRel("blog-author.blog-posts").find(["=", "entity user ID"], {limit: 1});

        // graph api
        users = await db.select(["id", "or", "other", "components", async (id) => ({
            name: "blog-posts",
            query: await db.select(["blog-data"]).fromRel("blog-author.blog-posts").find(["=", id], {limit: 5})
        })]).fromType("users").all({limit: 1});
        */
        await migrate.newComp({
            name: "password",
            model: {type: "string"},
            secure: true
        });

        await migrate.newComp({
            name: "forum-user-data",
            model: {type: "table", columns: [
                ["favorite-post", {type: "ulid"}]
            ]},
            secure: true, // can the client side see this?
            depends: ["login", "user-account"]
        });

        await migrate.newType({
            name: "user",
            keyModel: {type: "ulid"},
            defaultComps: [
                "user-account",
                "login",
                "password"
            ]
        });

        await migrate.newType({
            name: "blog-post",
            keyModel: {type: "ulid"},
            defaultComps: [
                "blog-post-data"
            ]
        });
        
        /*
        migrate.newRelation("blog-author", "blog-post[] <=> user");  // bidrectional, many to one, can query both
        migrate.newRelation("blog-author", "blog-post[] => user");  // one direction, many to one, can query against blog-posts
        migrate.newRelation("blog-author", "blog-post[] <= user");  // one direction, many to one, can query against users
        migrate.newRelation("blog-editors", "blog-post[] <=> user[]");  // bidrectional, many to many, can query both

        // await db.makeRel("blog-author", "blog-post-id", "user-id");
        // awawit db.delRel("blog-author", "blog-post-id", "user-id");*/

        /*
            App API:
            const new_user = await db.newEntity("user");
            const components = await db.getComponents(new_user, ["user-account", "address"]);
        */
    });


    // only works with FS native module
    fs.createFile(/* ... */);

    // only works with MAIL native module
    mail.createTemplate("template-name", "<h1>Head</h1>");


    
    /*cron_jobs: [
        {time: "* * * * *", call: async (RWS) => {

        }}
    ],
    channel_listeners: {
        "g-forms": () => {

        }
    },
    components: {
        "g-form": {
            title: "Gravity Forms Form",
            description: "Display a gravity form",
            options: async () => {
                const options = await RWS.getOptions({});
                await RWS.saveOptions({});
                return `<div></div>`;
            },
            render: async (args) => {
                const options = await RWS.getOptions();
                return `<div>${args.id}</div>`;
            }
        }
    },
    install: async () => {

    },
    uninstall: async () => {

    },
    inline: {
        rewrite: async () => {

        },
        head: async () => { // Tweak HTML head

        }
    },
    html_public: {
        rewrite: async () => {

        },
        head: async () => {

        },
        api: async () => {

        }
    }*/
};


/*
example.com

/ page-builder-app
/about-us about-us-app
/forum forum-app

404
500
403

sockets for ipc
one socket per module per deno (real) thread
https://crates.io/crates/parity-tokio-ipc

/about-us spa
/about-us/buy-our-shit spa

/forum mpa
/forum/page/1

/ page-builder-app
/this header-footer 
    main-template
    [
        / page-builder-app 
        /about-us about-us-app
        /forum [stock-ticker, forum-app, something-else]
    ]
*/