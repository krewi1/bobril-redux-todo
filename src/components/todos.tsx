import * as b from "bobril";
import {useDispatch, useSelector} from "../data/reduxSpace";
import {TodoItem} from "../data/stateDefinition";
import {addTodo, removeTodo, toggleTodo} from "../action/todoAction";

export function Todos() {
    const state = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const [text, setText] = b.useState("");

    return (
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <input className="new-todo" type="text" value={text} placeholder="Nejaky to TODO" onChange={setText} onKeyDown={(ev) => {
                    if (ev.which === 13) {
                        setText("");
                        dispatch(addTodo(text));
                        return true;
                    }
                    return false;
                }}/>
            </header>
            <section className="main">
                <ul className="todo-list">
                    {state.map((todo, index) => <Todo index={index} {...todo} />)}
                </ul>
            </section>

        </section>
    )
}

function Todo({done, title, index}: TodoItem & {index: number}) {
    const dispatch = useDispatch();
    return (
        <li className={done ? "completed" : ""}>
            <div className="view">
                <input className="toggle" type="checkbox" checked={done} onClick={() => dispatch(toggleTodo(index))}/>
                <label>{title}</label>
                <button className="destroy" onClick={() => dispatch(removeTodo(index))}/>
            </div>
            <input className="edit" value="Create a TodoMVC template"/>
        </li>
    )
}