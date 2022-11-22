import React from 'react'
// import image from '../../assets/header-image.jpg'

export default function Header({imgUrl, title, date, actor}) {
  return (
    <div className='header' style={{backgroundImage: `url(${imgUrl})`}}>
        <div>
        <h2>
            {title}
        </h2>
        <span>
            {date}
        </span>
        <br />
        <span>
            {actor}
        </span>
        </div>
    </div>
  )
}
