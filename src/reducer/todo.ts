import {TodoAction, TodoActions} from "../action/todoAction";
import {TodoItem} from "../data/stateDefinition";

function createDefaultState(): TodoItem[] {
    return []
}

export function todoReducer(state: TodoItem[] = createDefaultState(), action: TodoActions) {
    switch (action.type) {
        case TodoAction.ADD_TODO:
            return [...state, {done: false, title: action.payload.todo}];
        case TodoAction.REMOVE_TODO:
            const newArr = [...state];
            newArr.splice(action.payload.index, 1);
            return newArr;
        case TodoAction.TOGGLE_TODO:
            debugger;
            const arr = [...state];
            const item = arr[action.payload.index];
            arr.splice(action.payload.index, 1, {...item, done: !item.done});
            return arr;
        default:
            return state;
    }
}