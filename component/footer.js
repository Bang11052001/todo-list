import {connect} from '../store.js'

var connector = connect();

function footer({todos}) {
    var selected = JSON.parse(localStorage.getItem('selected'));
    return `
        <footer class="footer">
            <span class="todo-count"><strong>${todos.reduce((acc,curr) => (curr.isComplete ? acc : acc +1),0)}</strong> item left</span>
            <ul class="filters">
                <li>
                    <a onclick="dispatch('ALL',)" href="#/"  ${selected == 'all' && 'class ="selected"'}>All</a>
                </li>
                <li>
                    <a href="#/active" onclick="dispatch('ACTIVE')" ${selected == 'active' && 'class ="selected"'}>Active</a>
                </li>
                <li>
                    <a href="#/completed" onclick="dispatch('COMPLETE')" ${selected == 'completed' && 'class ="selected"'}>Completed</a>
                </li>
            </ul>
            <!-- Hidden if no completed items are left ↓ -->
            <button onclick = 'dispatch("CLEARALL")' class="clear-completed">${todos.some(todo => todo.isComplete === true) && 'Clear completed' || ''}</button>
        </footer>
    `
}


export default connector(footer)