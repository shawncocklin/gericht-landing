import React from 'react'
import './sectionTitle.css'

import { images } from '../../constants'

export default function SectionTitle({ hero, eyebrow, title }) {
  return (
    <div className='section-title'>
      <p className='eyebrow p__cormorant'>{eyebrow}</p>
      <img
        className='spoon__img'
        src={images.spoon}
        alt=''
      />
      <div className='section-title'>
        {hero ? (
          <h1>{title}</h1>
        ) : (
          <h2 className='headtext__cormorant'>{title}</h2>
        )}
      </div>
    </div>
  )
}
