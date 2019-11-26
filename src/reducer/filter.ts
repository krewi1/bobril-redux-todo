import {FilterTodo, TodoAction} from "../action/todoAction";

function createDefaultState() {
    return ""
}

export function filterReducer(state = createDefaultState(), action: FilterTodo) {
    switch (action.type) {
        case TodoAction.SET_FILTER:
            return action.payload.filter;
        default:
            return state
    }
}