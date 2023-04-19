import React from 'react'
import {client, urlForImage } from '../../../library/client'

const ProductDetails = ({ allProducts, similarProducts }) => {

    const {image, name, price, details} = allProducts;

  return (

    <div>
        
        <div className='product-detail-container'>
            <div>

                <div className='product-detail-image'>
                  <img src={urlForImage(image && image[index])} />
                </div>

                <div className='small-images-container'>
                  {image?.map( (item, index) => (
                    <img src={urlForImage(item)} className='' onMouseEnter='' />
                  ) )}
                </div>

            </div>
        </div>

    </div>

  )

}

export async function getStaticPaths () {

  const productQuery = `*[_type == "product"] {

    slug {
      current
    }

  }`;

  const allProducts = await client.fetch(productQuery);

  const paths = allProducts.map( (product) => (

    {
      params: {
        slug: product.slug.current
      }
    }

  ) );

  return {
    paths, 
    fallback: 'blocking',
  }

}


export async function getStaticProps({ params: {slug} }) {

    const productQuery = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const similarProductsQuery = '*[_type == "product"]';

    const allProducts = await client.fetch(productQuery);
    const similarProducts = await client.fetch(similarProductsQuery);
  
    return {
      props: {allProducts, similarProducts},
    }
  
  }

export default ProductDetails