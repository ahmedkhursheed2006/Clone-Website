import React from 'react'

function AboutUs() {
    return (
        <div  className='bg-[rgb(242,236,228)]'>
            <div className="flex w-full flex-col lg:flex-row items-center bg-[rgb(242,236,228)] py-[100px] gap-6">
                <div className="flex-1 ">
                    <img className="w-[34rem] h-[27rem] max-w-full justify-center float-right shadow-[0_4px_10px_rgba(0,0,0,0.1)]  " src="https://files.cdn-files-a.com/uploads/9376397/800_gi-668fb86a0be51.jpg" alt="About Us Image" />
                </div>

                <div className="flex-1 px-5 mr-[45px]">
                    <h2 className="relative text-[2.5rem] font-bold text-black inline-block pb-4 mb-5">
                        About Us
                        <div className="absolute left-0 bottom-0 w-[50%] border-t-[6px] border-[#d0ae81]"></div>
                    </h2>



                    <p className="text-xl leading-[1.6] text-black ">
                        At Coco Extensions, we believe in enhancing the natural beauty of our clients with the finest quality hair extensions.
                        Our team is dedicated to providing a seamless blend and a perfect match, ensuring you look and feel amazing.
                        Experience the transformation with our luxurious and professionally applied extensions.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
