import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { activeNote } from "../../actions/notes"
import { useForm } from "../../hooks/useForm"
import { NotesAppbar } from "./NotesAppBar"

export const NoteScreen = () => {


  const dispatch = useDispatch()

  const { active: note } = useSelector(state => state.notes)

  const [formValues, handleInputChange, reset] = useForm(note)
  const { title, body } = formValues

  const activeId = useRef(note.id)


  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note)
      activeId.current = note.id
    }
  }, [note, reset])

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }))
  }, [formValues, dispatch])



  return (
    <div className='notes__main-content'>
      <NotesAppbar />
      <div className='notes__content'>
        <input
          className="notes__title-input"
          name="title"
          value={title}
          onChange={handleInputChange}
          type='text'
          placeholder='Some awesome title'
          autoComplete='off'
        />
        <textarea
          className='notes__text-area'
          name='body'
          value={body}
          onChange={handleInputChange}
          placeholder='What happened today?'
          id=''>
        </textarea>
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
