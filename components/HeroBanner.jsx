import Link from 'next/link'
import React from 'react'
import { urlForImage } from '../library/client'


const HeroBanner = ({ heroBanner }) => {

  return (

    <div className='hero-banner-container'>

      <div>

        <p className='laptop-solo'> {heroBanner.smallText} </p>
        <h3> {heroBanner.midText} </h3>
        <h1> {heroBanner.largeText1} </h1>
        <img src={urlForImage(heroBanner.image)} alt="laptops" className='hero-banner-image' />

        <div>
          <Link href='/product/ID'>
            <button type='button'>Button text</button>
          </Link>

          <div className='desc'>
            <h5>Description</h5>
            <p>Description itself</p>
          </div>
        </div>

      </div>

    </div>
    
  )
}

export default HeroBanner