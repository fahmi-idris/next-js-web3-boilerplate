/* eslint-disable no-use-before-define */
export type Json = string | number | boolean | JsonObject;

export interface JsonObject {
  [x: string]: Json;
}

export interface ObjectOfJson {
  [key: string]: JsonObject | ObjectOfJson;
}
