
export default [
    (rws: any, db: any, fs: any, mail: any) => { // install
        
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

        rws.addAction("action_name", async () => {

        }, 10);

        rws.addFilter("filter_name", async () => {

        }, 10);

        // only works with DB native module
        db.migrate(1, async (migrate) => {

            // make previous version available
            // migrate.old_version = 0
            
            migrate.newComp("login", {
                type: "table",
                columns: [
                    ["username", {type: "string"}],
                    ["email", {type: "string"}],
                    ["phone", {type: "string"}]
                ]
            }, {
                secure: false
            });

            /*

            migrate.newIndex("user-id", {
                type: "string[]", // string, geo, uint8, uint8[], etc
                watch: "login", // which component to watch for this index?
                value: (loginComponent) => {
                    return [
                        loginComponent.username,
                        loginComponent.email,
                        loginComponent.phone
                    ].filter(v => v && v.length).map(v => String(v).toLowerCase())
                }
            });
            */

            // user id index
            migrate.newView("login-index", {
                watch: "login", // watch component?
                key: "string",
                type: "ulid",
                prev: async (view, entityType, entityID, oldLoginComponent) => { // get old (previous records)
                    let oldKeys = [
                        oldLoginComponent.username,
                        oldLoginComponent.email,
                        oldLoginComponent.phone
                    ].filter(v => v && v.length).map(v => [String(v).toLowerCase()]);

                    return await view.find(["IN", oldKeys]);
                },
                update: async (view, oldKVs, entityType, entityID, oldLoginComponent, loginComponent) => { // update them
                    let newKeys = [
                        loginComponent.username,
                        loginComponent.email,
                        loginComponent.phone
                    ].filter(v => v && v.length).map(v => [String(v).toLowerCase()]);

                    return await view.update(newKeys.map(login_str => ({
                        k: login_str,
                        v: entityID
                    })));
                }
            });

            // aggregate post count for users
            migrate.newView("post-count", {
                watch: "forum-post", // watch component?
                key: "ulid",
                type: "u32",
                prev: async (view, entityType, entityID, oldForumPost) => { // get old (previous records)
                    if (!oldForumPost.author) return false; // return false to stop execution
                    // return [] to just jump to update KV
                    return await view.find(["=", oldForumPost.author]);
                },
                update: async (view, oldKVs, entityType, entityID, oldForumPost, newForumPost) => { // update them
                    const useKV = oldKVs && oldKVs.length ? oldKVs[0] : {k: newForumPost.author, v: 0};

                    if (!oldForumPost) { // only increment if it's a new forum post
                        useKV.v++;
                    }

                    return await view.update([useKV]);
                }
            });

            // app index usage 
            // compIndex.entityType
            // *.compIndex should work to get any entity type for a given index
            // let users = await db.select(["id", "or", "other", "components"]).fromIndex("user-id.users").find(["=", "login@gmail.com"], {limit: 1});
            let users = await db.select(["id", "or", "other", "components"]).fromType("users").all({limit: 1});
            users = await db.select(["id", "or", "other", "components"]).fromType("users").find(["=", "entity ID"], {limit: 1});
            users = await db.select(["id", "or", "other", "components"]).fromType("users").find(["BETWEEN", ["lower ID", "higher ID"]], {limit: 1});
            
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
            migrate.newComp("password", {
                type: "string"
            }, {
                secure: true
            });



            migrate.newComp("forum-user-data", {
                type: "string"
            }, {
                secure: true, // can the client side see this?
                depends: ["login", "user-account"],
                indexes: {
                    
                }
            });

            /*
            // instead of group by
            migrate.newAggr("post-count", {
                type: "uint32"
            }, {
                watch: "forum-posts", // which component to watch for this aggregate?
                getId: (record) => {
                    return record.userId;
                },
                value: (oldEntity, newEntity, aggregateValue) => {
                    if (!aggregateValue) {
                        aggregateValue = 0;
                    }
                    if (!oldEntity) { // no old entity, new post
                        aggregateValue++;
                    }
                    return aggregateValue;
                },
                sortKey: (aggregateValue) => { // optional if you need sorting for this aggregate
                    return aggregateValue;
                }
            });
            */
            
            migrate.newType("user", "uuid" /* or ulid */, [
                // default entity components
                "user-account",
                "login",
                "password"
            ]);

            migrate.newType("blog-post", "ulid", [
                "blog-post-data"
            ]);
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
    }, 
    (rws: any) => { // uninstall

    }
];


/*
example.com

/ page-builder-app
/about-us about-us-app
/forum forum-app

404
500
403

/ page-builder-app
/this header-footer 
    main-template
    [
        / page-builder-app 
        /about-us about-us-app
        /forum [stock-ticker, forum-app, something-else]
    ]
*/