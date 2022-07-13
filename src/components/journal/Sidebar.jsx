import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../actions/auth'
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(startLogout())
  }

  return (
    <aside className='journal__sidebar'>
      <div className='journal__sidebar-navbar'>
        <h3>
          <i className="ri-moon-line"></i>
          <span> Jhon</span>
        </h3>
        <button className="button--inline-flex" type='button' onClick={handleLogout}>Logout</button>
      </div>
      <div className="journal__new-entry grid">
        <i className="ri-calendar-todo-line ri-4x"></i>
        <p>New entry</p>
      </div>
      <JournalEntries />
    </aside>
  )
}
