import moment from "moment"
import { useDispatch, useSelector } from "react-redux"
import { startSaveNote } from "../../actions/notes"

export const NotesAppbar = () => {

  const dispatch = useDispatch()
  const { active } = useSelector(state => state.notes)
  const fullDate = moment(active.createdAt).format('dddd, MMMM Do YYYY')

  const handleSave = () => {
    dispatch(startSaveNote(active))
  }

  return (
    <div className='notes__appbar'>
      <span>{fullDate}</span>
      <div>
        <button className="button--inline-flex" type='button'>
          Picture
        </button>
        <button
          className="button--inline-flex"
          type='button'
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  )
}
