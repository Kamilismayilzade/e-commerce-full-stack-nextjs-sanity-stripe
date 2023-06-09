import Link from 'next/link'
import React from 'react'
import { urlForImage } from '../library/client'


const Product = ({ product: {image, name, slug, price} }) => {

  return (

    <div>

      <Link href={`/product/${slug.current}`} >
        <div className='product-card'>
          <img src={urlForImage(image && image[0])} width={250} height={250} className='product-image' alt="" />
          <p className='product-name'> {name} </p>
          <p className='product-price'> ${price} </p>
        </div>
      </Link>

    </div>
    
  )
}

export default Product