import request from "../plugins/axios";
import { SIGN_OUT } from "../constant/api/user";

export const userSignout = (params, config = {}, extra) => {
  console.log(SIGN_OUT, "sigout");
  let { url, method } = SIGN_OUT;
  if (extra) url = `${url}/${extra}`;
  return request[method](url, params, { ...config });
};
