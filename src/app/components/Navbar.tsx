"use client"
import React from 'react'
import { FaLeaf } from 'react-icons/fa'
import { NavbarItems } from '../constant'
import Link from 'next/link'
import { MdMenu, MdOutlineShoppingCart } from 'react-icons/md'
import ResponsiveMenu from './ResponsiveMenu'
import { useState } from 'react'

type Items = {
    id: string,
    title: string,
    link: string,
}
const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
    <>
        <nav className='overflow-x-hidden'>
            <div className='container flex justify-between items-center py-4 md:pt-4'>

                <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                    <p className='text-primary'>Fruit</p>
                    <p className='text-secondary'>Store</p>
                    <FaLeaf className='text-green-500'/>
                </div>

                <div className='hidden md:block'>
                    <ul className='flex items-center gap-6 text-gray-600'>
                        {NavbarItems.map((item)=>(
                            <li key={item.id}>
                                <Link href={item.link} className='inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold'>{item.title}</Link>
                            </li>
                        ))}
                        <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'><MdOutlineShoppingCart/></button>
                    </ul>
                </div>

                {/* mobile menu    */}
                <div className='md:hidden'>
                    <MdMenu className='text-4xl' onClick={()=> setOpen(!open)}/>
                </div>
            </div>
        </nav>
        <ResponsiveMenu open={open}/>
    </>
  )
}

export default Navbar