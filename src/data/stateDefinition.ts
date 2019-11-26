export type RootState = {
    todos: TodoItem[],
    filter: string
}

export type TodoItem = {
    done: boolean;
    title: string;
}