import moment from 'moment'

export const JournalEntry = ({ id, date, body, title, urlImg }) => {

  const noteDate = moment(date)

  return (
    <div className='journal__entry'>
      {
        !!urlImg &&
        <div
          className='journal__entry-picture'
          style={{
            backgroundImage: `url(${url})`,
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
