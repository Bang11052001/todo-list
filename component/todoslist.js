import {connect} from '../store.js';
import todoitem from './todoitem.js';

var connector = connect();

function todosList({todos,index}) {
    return `
        <section class="main">
            <input id="toggle-all" class="toggle-all" type="checkbox" onchange ='dispatch("CHECKALL",this.checked)' ${todos.every(todo => todo.isComplete) && 'checked'}>
            <label for="toggle-all" >Mark all as complete</label>
            <ul class="todo-list">

            ${todoitem({todos,index})}
            
            </ul>
        </section>
    `
}

export default connector(todosList);