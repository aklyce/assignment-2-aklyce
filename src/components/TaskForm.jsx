import React from 'react'

function TaskForm({ value, onChange, onSubmit }) {
  return (
    <form className="task-form" onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Add a task"
        aria-label="Add a task"
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default TaskForm
