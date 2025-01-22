import React from 'react'

function Discover() {
    return (
        <div className='flex flex-col w-full lg:flex-row bg-[rgb(242,236,228)]'>
            <div className='bg-cover bg-center w-2/3 h-[500px] '
                style={{
                    backgroundImage: `url('https://files.cdn-files-a.com/uploads/9376397/2000_668ebc11be3f1_filter_668ebc7e54ced.png')`
                }}>

            </div>
            <div className='w-1/3 bg-[#f2ece4] text-center px-[65px] py-[45px]'>
                <h1 className='relative inline-block text-[60px] text-left font-bold leading-[5.2rem] pb-6 mb-6'>Discover <br />Your New <br /> Look
                <div className="absolute bottom-0 w-[30%] border-t-[6px] border-[#d0ae81]"></div></h1>
                
                <p className='text-left text-3xl'>Transform Your Hair, <br /> Transform Your Life</p>
            </div>
        </div>
    )
}

export default Discover
