import reducer from "./reducer.js";
import createStore from "./core.js";
// import logger from "./logger.js";

var {attach,connect,dispatch} = createStore(reducer);
window.dispatch = dispatch;

export {
    attach,
    connect
}
