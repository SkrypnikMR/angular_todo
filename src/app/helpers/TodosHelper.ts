import { Todo } from "../shared/todos.service";
export default class TodosHelper {
    constructor() { }
    getTodos() {
        const todos = localStorage.getItem('todos');
        if (!todos) return [];
        return JSON.parse(todos);
    }
    putTodos(todos: Todo[]) {
        localStorage.setItem('todos', JSON.stringify(todos))
    }
    playRemoveMusic() {
        const removeAudio = new Audio('assets/waka.mp3');
        removeAudio.volume = 0.4;
        removeAudio.play();
    }
}