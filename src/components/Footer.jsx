import React from 'react'

function Footer() {
    return (
        <div className='bg-white w-full text-center py-[30px] text-black text-[13px]'>
            <div className='text-center justify-between w-full top-0 leading-[3.5rem]'>
                <ul className='inline-flex gap-2 list-none'>
                    <li className='mx-[5px]'><a href="#home"></a>Home</li>
                    <li className='mx-[5px]'><a href="#about"></a>About</li>
                    <li className='mx-[5px]'><a href="#store"></a>Store</li>
                    <li className='mx-[5px]'><a href="#services"></a>Services</li>
                    <li className='mx-[5px]'><a href="#testimonials"></a>Testimonials</li>
                    <li className='mx-[5px]'><a href="#contact"></a>Contact</li>
                </ul>
            </div>
            <div>
                <p>Copyright © 2025 All rights reserved - COCO Extensions</p>
            </div>
        </div>
    )
}

export default Footer
