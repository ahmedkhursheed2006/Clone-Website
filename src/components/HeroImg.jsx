import React from 'react'

function HeroImg() {
    return (
        <div className="flex w-full lg:flex-row flex-col justify-between items-center bg-[rgb(244,244,244)] pt-[60px]">
            <div className=" w-1/3 px-[70px] py-16 ">
                <h1 className="text-6xl leading-[1.4] font-bold ">
                    <span className="text-[#d0ae81]">COCO</span><br />
                    Shades<br />
                    Extensions
                </h1>
                <h2 className="text-4xl text-black mt-2.5">Enhancing Your <br />Natural Beauty</h2>
                <div className="flex gap-[10px] mt-5 leading-[1.4]">
                    <button className="bg-[#d0ae81] text-black font-medium px-[30px] py-[14px] border-2 border-solid border-[#d0ae81] rounded-[15px]">Shop Now!</button>
                    <button className="bg-[#d0ae81] text-black font-medium px-[30px] py-[14px] border-2 border-solid border-[#d0ae81] rounded-[15px]">Contact Us</button>
                </div>
            </div>

            <div className=" w-2/3 text-right" >
                <img className="w-full  float-left object-cover" src="https://files.cdn-files-a.com/uploads/9376397/2000_668eb3a1af9de.png" alt="Hero Image" />
            </div>
        </div>
        
    )
}

export default HeroImg
