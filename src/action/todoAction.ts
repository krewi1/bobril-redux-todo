export enum TodoAction {
    ADD_TODO = "ADD_TODO",
    REMOVE_TODO = "REMOVE_TODO",
    TOGGLE_TODO = "TOGGLE_TODO",
    SET_FILTER = "SET_FILTER"
}

export type Action<T, P> = {
    type: T,
    payload: P
}

export type AddTodo = Action<TodoAction.ADD_TODO, {todo: string}>;
export type RemoveTodo = Action<TodoAction.REMOVE_TODO, {index: number}>;
export type ToggleTodo = Action<TodoAction.TOGGLE_TODO, {index: number}>;

export type TodoActions = AddTodo | RemoveTodo | ToggleTodo;

export function addTodo(todo: string): AddTodo {
    return {
        type: TodoAction.ADD_TODO,
        payload: {
            todo
        }
    }
}

export function removeTodo(index: number): RemoveTodo {
    return {
        type: TodoAction.REMOVE_TODO,
        payload: {
            index
        }
    }
}

export function toggleTodo(index: number): ToggleTodo {
    return {
        type: TodoAction.TOGGLE_TODO,
        payload: {
            index
        }
    }
}

type FilterType = "done" | "open";

export type FilterTodo = Action<TodoAction.SET_FILTER, {filter: FilterType}>

export function filter(filter: FilterType) {
    return {
        type: TodoAction.SET_FILTER,
        payload: {
            filter
        }
    }
}
