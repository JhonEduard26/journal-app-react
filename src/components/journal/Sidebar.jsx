import React from 'react'
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {
  return (
    <aside className='journal__sidebar'>
      <div className='journal__sidebar-navbar'>
        <h3>
        <i class="ri-moon-line"></i>
          <span> Jhon</span>
        </h3>
        <button className="button--inline-flex" type='button'>Logout</button>
      </div>
      <div className="journal__new-entry grid">
        <i class="ri-calendar-todo-line ri-4x"></i>
        <p>New entry</p>
      </div>
      <JournalEntries />
    </aside>
  )
}
