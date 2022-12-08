import { memo } from "react"

function AddTodo({ submitHandle, onChange, todo }) {
    console.log('AddTodo Rendered')
    return (
        <form onSubmit={submitHandle}>
            <input type="text" value={todo} onChange={onChange}></input>
            <button type="submit" disabled={!todo}>Ekle</button>
        </form>
    )
}

export default memo(AddTodo)