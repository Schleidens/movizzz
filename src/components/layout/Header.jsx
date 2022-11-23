import React from 'react'
// import image from '../../assets/header-image.jpg'

export default function Header({imgUrl, title, date, actor}) {
  return (
    <div className='header' style={{backgroundImage: `url(${imgUrl})`}}>
        <div>
        <span>
            {date}
        </span>
        <h2>
            {title}
        </h2>
        <span>
            {actor}
        </span>
        <div className='header__btn'>
          <button>
            play
          </button>
          <button>
            Ad to wishlist
          </button>
        </div>
        </div>
    </div>
  )
}
