import React from 'react'

function TaskCounter({ total, completed }) {
  return (
    <div className="taskCounter" aria-label={`Total tasks: ${total}, completed tasks: ${completed}`}>
      <span className="count-check" aria-hidden="true">
        ✓
      </span>
      <span>
        {total} / {completed}
      </span>
    </div>
  )
}

export default TaskCounter
