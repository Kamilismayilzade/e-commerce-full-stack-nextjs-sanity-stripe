import React from 'react'
import { HeroBanner, Product, Cart, Navbar, Footer, FooterBanner, Layout } from '../../components'
import { client } from '../../library/client'


const Home = () => {

  return (

    <>
    
      <HeroBanner />

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Explore high performance laptops</p>
      </div>

      <div className='products-container'>
        {['Product1', 'Product2'].map((product) => (
          product
        ))}
      </div>

      <FooterBanner />

    </>

  )
}

export async function getServerSideProps() {

  const productQuery = '*[_type == "product"]';
  const allProducts = await client.fetch(productQuery);

  const bannerQuery = '*[_type == "banner"]';
  const allBanner = await client.fetch(bannerQuery);

  return {
    props: {allProducts, allBanner},
  }

}

export default Home