import React from 'react'
import Bannerimg from "../../../public/assets/fruits-splash.png"
import Image from 'next/image'
import { IoBagHandleOutline } from 'react-icons/io5'

const Banner = () => {
  return (
    <>
        <section className='bg-secondary/10'>
            <div className="container grid srid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
                <div className='flex justify-center items-center'>
                    <Image src={Bannerimg} height={300} width={300} alt='' className='md:max-w-[400px] h-full object-cover drop-shadow'/>
                </div>
                <div className='flex flex-col justify-center'>
                    <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                        <h1 className='text-3xl lg:text-6xl font-bold uppercase'>Brand Info</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod quibusdam mollitia consequatur amet obcaecati! Repudiandae provident ex tempora nemo inventore, odit nihil nisi, iste ipsum quibusdam libero ratione, nostrum cumque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque totam quis eligendi, fugit inventore quae eveniet porro animi accusamus! Assumenda, animi. Ab praesentium dolores pariatur ratione nobis ex? Commodi, saepe.</p>

                        <div className='flex justify-center md:justify-start'>
                            <button className='primary-btn flex items-center'>
                                Learn more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner