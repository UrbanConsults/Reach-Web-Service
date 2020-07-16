// Copyright 2019 the Deno authors. All rights reserved. MIT license.
import { sendSync, sendAsync } from "./dispatch_json.ts";
import { close } from "./resources.ts";

export interface RWSRequest {
  url: string;
  respId: number;
}

class rwsServer implements AsyncIterableIterator<RWSRequest> {
  readonly rid: number;

  constructor() {
    this.rid = sendSync("op_rws_server_start", {});
  }

  next(): Promise<IteratorResult<RWSRequest>> {
    return sendAsync("op_rws_server_poll", {
      rid: this.rid,
    });
  }

  return(value?: RWSRequest): Promise<IteratorResult<RWSRequest>> {
    close(this.rid);
    return Promise.resolve({ value, done: true });
  }

  [Symbol.asyncIterator](): AsyncIterableIterator<RWSRequest> {
    return this;
  }
}

export function sendRWS(id: number, value: string): {value: boolean} {
  return sendSync("op_rws_server_resp", {
    rid: id,
    value: value
  });
}

export function watchRWS(callback: () => void): AsyncIterableIterator<RWSRequest> {
  return new rwsServer();
}
