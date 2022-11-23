import React from 'react'

export default function Movie({img, date, title}) {
  return (
    <div className='movie'>
        <img src={img} alt={title} />
        <span>
            {date}
        </span>
        <h4>
            {title}
        </h4>
    </div>
  )
}
