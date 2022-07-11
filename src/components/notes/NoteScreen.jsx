import React from 'react'
import { NotesAppbar } from './NotesAppbar'

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>
      <NotesAppbar />
      <div className='notes__content'>
        <input className="notes__title-input" type='text' placeholder='Some awesome title' autoComplete='off' />
        <textarea className='notes__text-area' name='' placeholder='What happened today?' id=''></textarea>
        <div className='notes__image'>
          <img
            className=''
            src='https://images.pexels.com/photos/606539/pexels-photo-606539.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='imagen' />
        </div>
      </div>
    </div>
  )
}
