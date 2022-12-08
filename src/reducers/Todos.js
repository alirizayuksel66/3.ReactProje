import { memo } from "react"
import TodoItem from "./TodoItem"

function Todos({todos}) {
    console.log('Todo Rendered')
    return (
        <ul>
            {todos.map((todo, index) =>
                <TodoItem todo={todo} key={index}></TodoItem>
            )}
        </ul>
    )
}

export default memo(Todos)