import * as React from "fb::react";

const RWS.template = () => {
    route_id
    return (template_name) => {
        deno.sendAsyncToRust(app_id, route_id, template_name);
    }
}


export default async (htmlContainer, baseURL, route) => {

    const content = await RWS.template("main-page", "main-page");
    RWS.service.get_user_by_id(22);
    RWS.add_action /* no op */

    const component = await RWS.component("g-form", 2);

    return <header></header><div>{content}</div><footer></footer>
}