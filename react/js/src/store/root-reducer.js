import { combineReducers } from "@reduxjs/toolkit";
const reducerModules = import.meta.glob("./slice/*.js");

async function setReducers(modules) {
  const result = Object.keys(modules).reduce(async (prev, curr) => {
    const key = curr.match(/(\w+)\.js/)[1];
    prev = await prev;
    const module = await reducerModules[curr]();
    prev[key] = module.default;
    console.log(key, prev);
    return prev;
  }, {});
  return result;
}
const reducers = await setReducers(reducerModules);

console.log(reducers);

export default combineReducers(reducers);
