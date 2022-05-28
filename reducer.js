import Storage from "./localStorage.js";

var init = {
    todos : Storage.get()
}

export default function reducer(state = init, action, args) {
  
    switch (action){
        case 'ADD':
            const[newTodos] = args;
            if(newTodos.value){
                var todos = [...state.todos,newTodos];
                Storage.set(todos)
            }
            else{
                var todos = [...state.todos];
            }
            return {
                'todos' : todos
            }
        case 'DELETE':
            var [index] = args;
            state.todos.splice(index,1);
            Storage.set(state.todos);
            return {
                'todos' : state.todos
            }
        case 'TOOGLE':
            var [index] = args;
            state.todos[index].isComplete = !state.todos[index].isComplete;
            Storage.set(state.todos);
            return {
                'todos' : state.todos
            }
        case 'CHECKALL':
            var  [isTrue] = args;
            state.todos.map(todo => {
               todo.isComplete = isTrue; 
            })
            
            Storage.set(state.todos);
            return {
                'todos' : state.todos
            }
        case 'CLEARALL':
            state.todos = state.todos.filter(todo =>{
                return todo.isComplete === false 
            })
            if(state.todos === '[]')
            {
                state.todos = Storage.get();
            }
            Storage.set(state.todos);
            return {
                'todos' :  state.todos
            }
        case 'ALL':
            localStorage.setItem('selected',JSON.stringify('all'));
            state.todos = Storage.get();
            return {
                'todos' : state.todos
            }
        case 'ACTIVE':
            localStorage.setItem('selected',JSON.stringify('active'));
            state.todos = Storage.get();
            return {
                'todos' : state.todos
            }
        case 'COMPLETE':
            localStorage.setItem('selected',JSON.stringify('completed'));
            state.todos = Storage.get();
            return {
                'todos' : state.todos
            }
        case 'STARTEDIT':
            var [index,target] = args;
            if(state.todos){
                state.todos[index].isEditing = true;
            }
            return {
                'todos' : state.todos
            }
        case 'ENDEDIT':
            var [index,value] = args;
            state.todos[index].value = value;
            state.todos[index].isEditing = false;  
            Storage.set(state.todos);
            return {
                'todos' : state.todos
            }
        default:
            return state;
    } 
}

