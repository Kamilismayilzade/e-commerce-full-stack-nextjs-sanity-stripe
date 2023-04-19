import React from 'react'
import {BsPinterest} from 'react-icons/bs'
import {RiInstagramFill} from 'react-icons/ri'

const Footer = () => {

  return (

    <div className='footer-container'>

      <p className='icons'>
        <BsPinterest /> <RiInstagramFill />
      </p>
      <p> &copy; Tech Fashion  2023 </p>

    </div>
    
  )
}

export default Footer