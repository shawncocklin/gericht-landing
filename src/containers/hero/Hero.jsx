import React from 'react'
import './hero.css'

import { SectionTitle } from '../../components'
import { images } from '../../constants'

export default function Hero() {
  return (
    <div className='hero section__padding'>
      <div className='hero-content'>
        <SectionTitle
          eyebrow='Chase the new Flavour'
          title='The key to Fine dining'
          hero={true}
        />
        <p className='hero-content_body'>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>
        <button>Explore Menu</button>
      </div>
      <div className='hero-img'>
        <img
          src={images.welcome}
          alt='a salmon dish covered in an orange sauce with herbs and lemon wedges'
        />
      </div>
    </div>
  )
}
