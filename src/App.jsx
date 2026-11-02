import { useMemo, useState } from 'react'
import './App.css'
import Header from './components/Header'
import TaskCounter from './components/TaskCounter'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

const initialTasks = [
  { id: 1, text: 'Call Mom', completed: false },
  { id: 2, text: 'Buy the new issue of Scientific American', completed: false },
  { id: 3, text: 'Return the textbook to Josie', completed: false },
  { id: 4, text: 'Buy the new album by Rake', completed: false },
  { id: 5, text: 'Buy a gift card for Dad', completed: false },
]

function App() {
  const [tasks, setTasks] = useState(initialTasks)
  const [newTask, setNewTask] = useState('')
  const [filter, setFilter] = useState('All')

  const completedCount = tasks.filter((task) => task.completed).length

  const visibleTasks = useMemo(() => {
    if (filter === 'Active') {
      return tasks.filter((task) => !task.completed)
    }

    if (filter === 'Completed') {
      return tasks.filter((task) => task.completed)
    }

    return tasks
  }, [filter, tasks])

  const handleAddTask = (event) => {
    event.preventDefault()
    const trimmedText = newTask.trim()

    if (!trimmedText) {
      return
    }

    setTasks((currentTasks) => [
      ...currentTasks,
      {
        id: Date.now(),
        text: trimmedText,
        completed: false,
      },
    ])

    setNewTask('')
  }

  const toggleTask = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  const deleteTask = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId),
    )
  }

  return (
    <div className="app-shell">
      <Header>
        <TaskCounter total={tasks.length} completed={completedCount} />
      </Header>

      <div className="workspace">
        <aside className="sidebar" aria-label="Main navigation">
          <div className="nav-item active">
            <span className="nav-icon inbox" aria-hidden="true" />
            <span>Inbox</span>
            <span className="nav-count">{tasks.length}</span>
          </div>

          <div className="nav-item">
            <span className="nav-icon calendar" aria-hidden="true" />
            <span>Today</span>
            <span className="nav-count muted">{tasks.length}</span>
          </div>

          <div className="nav-item">
            <span className="nav-icon upcoming" aria-hidden="true" />
            <span>Upcoming</span>
          </div>
        </aside>

        <main className="task-panel">
          <h1>Inbox</h1>

          <TaskForm
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
            onSubmit={handleAddTask}
          />

          <TaskList
            tasks={visibleTasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        </main>
      </div>
    </div>
  )
}

export default App
