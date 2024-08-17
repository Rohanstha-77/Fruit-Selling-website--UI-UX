import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FaLeaf } from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
        <footer className='bg-primary/10 py-12'>
            <div className='container flex justify-between items-center'>
                <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                    <p className='text-primary'>Fruit</p>
                    <p className='text-secondary'>Store</p>
                    <FaLeaf className='text-green-500'/>
                </div>
                <div className='text-3xl flex items-center gap-4 mt-6 text-gray-700'>
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaTwitter/>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer