import React from 'react'
import { HeroBanner, Product, Cart, Navbar, Footer, FooterBanner, Layout } from '../../components'

const Home = () => {

  return (

    <>
    
      HeroBanner

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Explore high performance laptops</p>
      </div>

      <div className='products-container'>
        {['Product1', 'Product2'].map((product) => (
          product
        ))}
      </div>

      Footer

    </>

  )
}

export default Home