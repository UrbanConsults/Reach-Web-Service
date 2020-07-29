import * as React from "react";

export default async (head, token) => {

    const content = await RWS.template("main-page", "main-page");

    const component = await RWS.component("g-form", 2);

    return <header></header><div>{content}</div><footer></footer>
}