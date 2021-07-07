import { Todo } from "../shared/todos.service";
export default class TodosHelper {
    constructor() { }
    getTodos() {
        const todos = localStorage.getItem('todos');
        if (!todos) return [];
        return JSON.parse(todos);
    }
    putTodos(todos: Todo[]) {
        console.log('yes');
        localStorage.setItem('todos', JSON.stringify(todos))
    }
}