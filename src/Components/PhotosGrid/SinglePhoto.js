import React from 'react'
import './SinglePhoto.style.css'
const SinglePhoto = ({imgSrc}) => {
    // console.log(imgSrc,"imgsrc")

  return (
    <div className='single-photo-div' style={{backgroundImage : {imgSrc}}}>
   
      <img src={imgSrc} alt="img" className='photo'>

      </img>
    </div>
  )
}

export default SinglePhoto