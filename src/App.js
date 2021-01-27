import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/TasksComp'
import AddTask from './components/AddTask'

function App() {

  const [showForm, setShowForm] = useState(false)

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctor\'s Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    },
  ])

  // Add Task
  const addTask = (task) => {
    let id;
    if (!tasks[tasks.length-1]) {
      id = 1;
    }
    else {
      id = tasks[tasks.length-1].id + 1;
    }

    const newTask = { id: id, ...task}

    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
      setTasks(tasks.map((task) => task.id === id ? {
          ...task, reminder: !task.reminder
      } : task))
  }

  return (
    <div className="container">
      <Header showForm={() => {
        setShowForm(!showForm)
      }} showAdd={showForm}/>
      {showForm && <AddTask onAdd={addTask}/>}
      {
        tasks.length > 0 ? 
        <Tasks 
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
        /> :
        "No Tasks for Today!"
      }
    </div>
  )
}

export default App;
