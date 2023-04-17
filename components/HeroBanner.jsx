import Link from 'next/link'
import React from 'react'


const HeroBanner = () => {

  return (

    <div className='hero-banner-container'>

      <div>

        <p className='laptop-solo'>small text</p>
        <h3>medium text</h3>
        <img src="" alt="laptops" className='hero-banner-image' />

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