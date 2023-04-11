import { createStore } from "vuex";
import state from "./state";
import * as actions from "./actions";
import * as getters from "./getters";
import * as mutation from "./mutation";

const store = createStore({
  state,
  actions,
  mutation,
  getters,
});

export default store;
