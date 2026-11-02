import React from 'react'

function Header({ children }) {
  return (
    <header className="topbar">
      <div className="search-area" aria-label="Quick Find">
        <span className="search-icon" aria-hidden="true" />
        <input type="text" placeholder="Quick Find" aria-label="Quick Find" />
      </div>

      {children}
    </header>
  )
}

export default Header
