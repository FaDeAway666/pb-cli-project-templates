import { reactive } from "vue";
import { testConfig } from "../constant/config";

let data, type;
export default (key) => {
  console.log(key);
  if (data && type === key) {
    return data;
  }
  const result = testConfig[key];
  data = reactive({ ...result });
  type = key;
  return data;
};
