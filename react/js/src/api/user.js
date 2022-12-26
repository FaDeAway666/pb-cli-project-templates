import request from "../utils/request";
import { SIGN_OUT } from "../constant/api/user";

export const userSignout = (params, config = {}, extra) => {
  let { url, method } = SIGN_OUT;
  if (extra) url = `${url}/${extra}`;
  return request[method](url, params, { ...config });
};