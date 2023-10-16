
import { useTodos } from '../store/todos';
import { useSearchParams } from "react-router-dom";

const Todos = () => {
    const {todos, toggleTodoAsCompleted, handleDeleteTodo} = useTodos();

    const [searchParams] = useSearchParams();
    let todossData = searchParams.get("todos");
    console.log("🚀 ~ file: todos.tsx:10 ~ Todos ~ todossData:", todossData)


    let filterData = todos;
    if(todossData === "active"){
        filterData = filterData.filter((task) => !task.completed  )
    }

    if(todossData === "completed"){
        filterData = filterData.filter((task) => task.completed  )
    }

  return (
    <ul className="main-task">
        {
            filterData.map((todo) => {
                return <li key={todo.id}>
                    <input type="checkbox"  id={`todo-${todo.id}`}
                        checked={todo.completed}
                        onChange={() => toggleTodoAsCompleted(todo.id)}
                    />
                    <label htmlFor={`todo-${todo.id}`} > {todo.task} </label>
                    {
                        todo.completed && (
                            <button type='button' 
                            onClick={() => handleDeleteTodo(todo.id)} >Delete</button>
                        )
                    }
                </li>
            })
        }
    </ul>
  )
}

export default Todos