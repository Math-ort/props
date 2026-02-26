import './App.css'
import { useState } from "react";
import Task from "./components/Task";
import AddTaskForm from "./components/AddTaskForm";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  //para añadir una tarea:
  const addTask = (text) => {
    const newTask = {
      id: tasks.length +1,
      text,
      completed: false
    };
    setTasks([...tasks, newTask]); 
  };

  // para eliminar una tarea:
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // para marcar una tarea como completada:
const toggleTask = (id) => {
  setTasks(tasks.map(task => task.id === taskid ? { ...task, completed: !task.completed } : task
    )
  );   
  }; 

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <AddTaskForm addTask={addTask} />
      {tasks.map(task => (
        <Task 
          key={task.id} 
          task={task} 
          deleteTask={deleteTask} 
          toggleTask={toggleTask} 
        />
      ))}
    </div>
  );
};

export default App;
