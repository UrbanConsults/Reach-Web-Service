
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
        db.createTable(/* ... */);

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