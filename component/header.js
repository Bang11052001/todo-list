import { connect } from "../store.js"

var connector = connect();
var  dem =-1;

function headers(state) {
    return `
    <header class="header">
        <h1>todos</h1>
        <input onkeyup = "event.which == 13 && dispatch('ADD',{'value' : value.trim(),isComplete: false});event.which == 13 &&focusAdd()" 
        class="new-todo" placeholder="What needs to be done?" autofocus>
    </header>`
}



export default connector(headers);