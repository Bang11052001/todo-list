function todoitem({todos}) {
    todos = todos.map((todo,index) => {
        return {
                todo:todo,
                index: index
        }
    } );
    
    
    var selected = JSON.parse(localStorage.getItem('selected'));
    
    switch (selected) {
        case 'all': 
            break;
        case 'active': 
            todos = todos.filter(({todo}) => !todo.isComplete)
            break;
        case 'completed':
            todos = todos.filter(({todo}) => todo.isComplete);
            break;
    }
    return `
        ${todos.map((todo) => todo = `
            <li 
            onkeyup = 'event.which == 13 && dispatch("ENDEDIT",${todo.index},event.target.value)' 
            class=" ${todo.todo.isComplete && 'completed' || todo.todo.isEditing && 'editing' } " 
            >
            <div class="view">
                <input class="toggle" onclick = "dispatch('TOOGLE',${todo.index})" type="checkbox" ${todo.todo.isComplete && 'checked'} >
                <label  ondblclick = 'dispatch("STARTEDIT",${todo.index},this); focusfunc()'>${todo.todo.value}</label>
                <button class="destroy" onclick = "dispatch('DELETE',${todo.index})"></button>
            </div>
            <input onblur = 'dispatch("ENDEDIT",${todo.index},event.target.value)' class="edit" value='${todo.todo.value}' placeholder ='' type ='text' autofocus>
            </li>
        `).join('')}
    `
}

export default todoitem;