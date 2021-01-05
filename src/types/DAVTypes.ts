import { DAVNamespace } from '../consts';

export type DAVProp = {
  name: string;
  namespace?: DAVNamespace;
  value?: any;
};

export type DAVFilter = {
  type: string;
  attributes: { [key: string]: string };
  value?: string | number;
  children?: DAVFilter[];
};

export type DAVDepth = '0' | '1' | 'infinity';

export type DAVMethods =
  | 'COPY'
  | 'LOCK'
  | 'MKCOL'
  | 'MOVE'
  | 'PROPFIND'
  | 'PROPPATCH'
  | 'UNLOCK'
  | 'REPORT'
  | 'SEARCH'
  | 'MKCALENDAR';

export type HTTPMethods =
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH';

export type DAVResponse = {
  raw?: any;
  href?: string;
  status: number;
  statusText: string;
  ok: boolean;
  error?: { [key: string]: any };
  responsedescription?: string;
  props?: { [key: string]: { status: number; statusText: string; ok: boolean; value: any } | any };
};

export type DAVRequest = {
  headers?: { [key: string]: any };
  method: DAVMethods | HTTPMethods;
  body: any;
  namespace?: string;
  attributes?: { [key: string]: any };
};

export type DAVTokens = {
  access_token?: string;
  refresh_token?: string;
  expires_in?: number;
  id_token?: string;
  token_type?: string;
  scope?: string;
};

export type DAVAuthHeaders = {
  authorization?: string;
};
