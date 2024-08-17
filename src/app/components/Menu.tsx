import React from 'react'
import { MenuItem } from '../constant'
import Image from 'next/image'

type menu={
    id:string,
    title:string,
    price: string
}

const Menu = () => {
  return (
    <>
        <section>
            <div className='container pt-12 pb-20'>
                <h1 className='text-2xl font-bold text-left pb-10 uppercase'>Our Menu</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
                    {MenuItem.map((menu)=>(
                        <div key={menu.id} className='bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex justify-around items-center gap-3'>
                            <Image src={menu.img} height={60} width={60} alt='' className='mb-4 scale-110 transform-translate-y-6'/>
                            <div>
                                <h1 className='text-lg font-serif'>{menu.title}</h1>
                                <p className='text=lg font-semibold text-secondary'>{menu.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default Menu