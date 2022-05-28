import {connect} from '../store.js';
import footer from './footer.js';
import header from './header.js';
import todosList from './todoslist.js';

var connector = connect();

function App(state) {
    return `
        ${header()}
        ${todosList()}
        ${localStorage.getItem('todos') !== '[]'  && footer() || ''} 
    `
}

export default connector(App);
