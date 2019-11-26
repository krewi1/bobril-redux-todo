import {Filter} from "./components/filter";

declare const DEBUG: boolean;
(window as any).process = {
    env : {
        NODE_ENV: DEBUG ? "development" : "production"
    }
};
import * as b from "bobril";
import {combineReducers, createStore} from "redux";
import {todoReducer} from "./reducer/todo";
import {filterReducer} from "./reducer/filter";
import {StoreProvider} from "./data/reduxSpace";
import {Todos} from "./components/todos";

b.asset("../node_modules/todomvc-app-css/index.css");

const devtool = DEBUG && (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(combineReducers({todos: todoReducer, filter: filterReducer}), devtool);


b.init(() => {
    return <div className="todo-app">
        <StoreProvider store={store}>
            <Todos/>
            <Filter/>
        </StoreProvider>
    </div>
});