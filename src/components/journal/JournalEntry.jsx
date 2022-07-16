import { useDispatch } from 'react-redux'
import moment from 'moment'
import { activeNote } from '../../actions/notes'

export const JournalEntry = ({ id, createdAt, body, title, urlImg }) => {

  const dispatch = useDispatch()

  const noteDate = moment(createdAt)

  const handleEntryClick = () => {
    dispatch(activeNote(id, {
      title,
      body,
      createdAt
    }))
  }

  return (
    <div className='journal__entry' onClick={handleEntryClick}>
      {
        !!urlImg &&
        <div
          className='journal__entry-picture'
          style={{
            backgroundImage: `url(${urlImg})`,
            backgroundSize: 'cover'
          }}
        ></div>
      }
      <div className='journal__entry-body'>
        <p className="journal__entry-title">{title}</p>
        <p className="journal__entry-content">
          {body}
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>{noteDate.format('dddd')}</span>
        <p>{noteDate.format('Do')}</p>
      </div>
    </div>
  )
}
