import { useSelector, useDispatch } from "react-redux"
import { removeTask, addTask } from "./taskSlice"


const App = () => { 
  const taskState = useSelector(state => state.tasks) //obtenemos el estado
  const dispatch = useDispatch(); //disparamos una accion, para actualizar el estado
  return (
    <>
      <h1>Lista de tarea: </h1> 
      {taskState?.map(task => (
        <div key={task.id}>
          <h2>{task.titulo}</h2>
          <p>{task.descripcion}</p>
          <button onClick={() => dispatch(removeTask(task.id))}>Eliminar tarea</button>
        </div>
      ))}
      <button onClick={() => dispatch(addTask({ id: "3", titulo: "titulo3", descripcion: "3" }))}>
        Add task
      </button>
    </>
  )
}

export default App
