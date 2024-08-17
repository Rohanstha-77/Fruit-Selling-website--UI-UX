
import React from 'react'
import { AnimatePresence,motion } from 'framer-motion'
import { MdMenu } from 'react-icons/md'

const ResponsiveMenu = ({open}: {open: boolean}) => {
  return (
    <>
        <AnimatePresence mode='wait'>
            {open && (
                <motion.div 
                initial={{opacity:0 , y:-100}}
                animate={{opacity:1 , y:0}}
                exit={{opacity:0 , y: -100}}
                transition={{duration: 0.3}}
                className='absolute top-10 left-0 w-full h-screen z-20'>
                    <div className='text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl'>
                        <ul className='flex flex-col items-center gap-10'>
                            <li>Home</li>
                            <li>Product</li>
                            <li>Abouts</li>
                            <li>Shop</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </>
  )
}

export default ResponsiveMenu