export default function createStore(reducer) {
    let state = reducer();
    var roots = new Map();

    function render() {
        for(let [root,component] of roots){
            root.innerHTML = component();
        }
    }

    return {
        attach(component,root) {     
            roots.set(root,component);
            render();
        },
        connect(selector = (state) => state) { 
            return component => (props,...args) =>
            component(Object.assign({},props,...args,selector(state)));
        },
        dispatch(action, ...args) {
            state = reducer(state,action,args);
            render();
        }
    }
}