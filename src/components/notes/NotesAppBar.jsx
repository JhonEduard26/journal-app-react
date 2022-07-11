import React from 'react'

export const NotesAppbar = () => {
  return (
    <div className='notes__appbar'>
      <span>12 de Julio de 2022</span>
      <div>
        <button className="button--inline-flex" type='button'>
          Picture
        </button>
        <button className="button--inline-flex" type='button'>
          Save
        </button>
      </div>
    </div>
  )
}
