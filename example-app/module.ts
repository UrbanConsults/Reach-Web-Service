import { sendRWS } from "../cli/js/ops/rws_server";

export default () => ({
    api: 1, // Module API version
    name: "my-app",
    version: "0.0.1",
    author: {
        name: "Billy Joel",
        company: "Piano Man, Inc",
        email: "something@something.com"
    },
    render_type: "single_page", // single_page || multi_page || inline
    license: "MIT",
    git: "github.com/account/repo.git",
    native_dependencies: {
        "rws-db": 1 // API version
    },
    cron_jobs: [
        {time: "* * * * *", call: async (RWS) => {

        }}
    ],
    channel_listeners: {
        "g-forms": () => {

        }
    },
    permissions: {
        "can_view_something": {title: "Some view", desc: "Something specific goes here"},
        "can_edit_own_posts": {title: "Edit Own Posts", desc: "Allows the user to edit their own posts"}
    },
    nested_routes: {
        "main-page": {args: ["template:string"]}
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
    public_html: {
        rewrite: async () => {

        },
        head: async () => {

        },
        api: async () => {

        }
    }
})


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