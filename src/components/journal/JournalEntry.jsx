import React from 'react'

export const JournalEntry = () => {
  return (
    <div className='journal__entry'>
      <div className='journal__entry-picture'>
      </div>
      <div className='journal__entry-body'>
        <p className="journal__entry-title">Vientos de un nuevo amanecer</p>
        <p className="journal__entry-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <p>28</p>
      </div>
    </div>
  )
}
