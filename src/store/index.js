import Vuex from "vuex"
import lead from "./form/lead.js"

export default () => {
  return new Vuex.Store({
    modules: {
      lead
    },
    strict: process.env.NODE_ENV !== `production`
  })
}
