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
          <Link href={`/product/${heroBanner.product}`}>
            <button type='button' style={{ background: ' #b7950b ', boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset', }} > {heroBanner.buttonText} </button>
          </Link>

          <div className='desc'>
            <h5>Description</h5>
            <p> {heroBanner.desc} </p>
          </div>
        </div>

      </div>

    </div>
    
  )
}

export default HeroBanner