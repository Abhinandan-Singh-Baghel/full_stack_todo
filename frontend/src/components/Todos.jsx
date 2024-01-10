export function Todos({todos}){
    return <div>
        {/* <h1> Go to the gym</h1>
        <h1>Hit the Gym</h1>
        <button>Mark as completed</button> */}


        {todos.map(function(todo){
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "Completed" : "Mark as done"}</button>
                </div>
        })}

    


    </div>
} 