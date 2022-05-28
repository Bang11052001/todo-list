export default{
        get(){
            return JSON.parse(localStorage.getItem('todos')) || [];
        },
        set(todos) {
            return localStorage.setItem('todos',JSON.stringify(todos))
        },
        remove(index){
            return localStorage.removeItem(index);
        },
        clear(){
            return localStorage.clear();
        }
}


