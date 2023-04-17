import React from 'react'
import { HeroBanner, Product, Cart, Navbar, Footer, FooterBanner, Layout } from '../../components'
import { client } from '../../library/client'


const Home = ({ allProducts, allBanner }) => {

  return (

    <>
    
      <HeroBanner heroBanner = {allBanner.length && allBanner[0]} />

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Explore high performance laptops</p>
      </div>

      <div className='products-container'>
        {allProducts.map((product) => (
          product.name
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