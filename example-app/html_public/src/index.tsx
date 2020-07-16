import * as React from "react";

export default async (head, token) => {

    const content = await RWS.template("main-page", "main-page");

    return <div>{content}</div>
}