import React, { useState } from 'react'
import images from './images'
import './ImageMain.css'

export default function ImageMain() {
    const [mainImage,setMainImage] = useState(images[0]);

  return (
    <div className='App'>
      <div className="container">
        <img src={mainImage} alt="" className='selected'/>
      </div>
      <div className='imgContainer'>
        {images.map((img,index) => (
            <img onClick={() => setMainImage(img)} key={index} src={img} alt="" />
        ))}
    </div>
    </div>
  )
}
