import { memo } from "react"

function TodoItem({todo}) {
    console.log('TodoItem Rendered')
    return (
        <li>
            {todo}
        </li>
    )
}

export default memo(TodoItem)