import Image from 'next/image'
import React from 'react'
import { IoBagHandleOutline } from 'react-icons/io5'
import HeroPng from "../../../public/assets/fruit-plate.png"
import Leaf from "../../../public/assets/leaf.png"


const HeroSection = () => {
  return (
    <>
        <section>
            <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative'>
                <div className='flex flex-col justify-center py-13 md:py-0  z-10'>
                    <div className='text-center md:text-left space-y-6 lg:max-w-[400px]'>
                        <h1 className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-tight font-averia'>
                            Healthy
                            <br/>
                            Fresh <span className='text-secondary'>Fruits!</span>
                        </h1>
                        <p className='text-2xl tracking-wide'>Order Now For Fresh Healthy Life</p>
                        <p className='text-gray-400'>Healthy and yummy food for fresh morning breakfast. Ear Daily for good healthy and mind oder now and get 20% off on your first order</p>

                        <div className='flex justify-center md:justify-start'>
                            <button className='primary-btn flex items-center gap-2'> <span><IoBagHandleOutline/></span>Order Now</button>
                        </div>
                    </div>


                </div>
                <div className='flex justify-center items-center'>
                    <Image src={HeroPng} height={350} width={350} alt='' className='md:w-[550px] drop-shadow'/>
                </div>

                <div className='absolute top-14 md:top-0 right-1/2 blur-sm opacity-80 rotate-[40deg]'>
                 <Image src={Leaf} height={350} width={350} alt='' className='md:max-w-[300px]'/>
                </div>
            </div>
        </section>
    </>
  )
}

export default HeroSection