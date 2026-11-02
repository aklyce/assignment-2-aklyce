import React from 'react'

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={task.completed ? 'task-item completed' : 'task-item'}>
      <label className="task-check">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className="checkmark" aria-hidden="true" />
      </label>

      <span className="task-text">{task.text}</span>

      <button
        type="button"
        className="delete-btn"
        onClick={() => onDelete(task.id)}
        aria-label={`Delete ${task.text}`}
      >
        ×
      </button>
    </li>
  )
}

export default TaskItem
