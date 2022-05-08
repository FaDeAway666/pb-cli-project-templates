import { createStore } from "vuex";

// 类似require.context
const raw = import.meta.glob("./modules/*.js");
const modules = Object.keys(raw).reduce(async (pre, key) => {
  let name = key
    .split("/")
    .reverse()[0]
    .match(/([a-z-]+)\./)[1];
  const module = await raw[key]();
  return {
    ...(await pre),
    [name]: module.default,
  };
}, {});

const store = createStore({
  state: () => ({
    auth: null,
  }),
  getters: {},
  mutations: {},
  actions: {},
  modules,
});

export default store;
