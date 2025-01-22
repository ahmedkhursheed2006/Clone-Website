import React from 'react'

function Services() {
    return (
        <div id='services' className='w-full bg-[#f4f4f4] py-[100px]'>
            <div className=' text-center text-3xl leading-[5rem]'>
                <h1 className='inline-block relative text-center mb-6'>Services
                <div className="absolute bottom-0 w-[100%] border-t-[3px] border-[#d0ae81]"></div>
                </h1>
            </div>
            <div className="flex items-center justify-center w-full">
                {/* Card container */}
                <div className="flex items-center justify-center gap-4 w-[80%]">
                    {/* 1st card */}
                    <div className="flex flex-col items-center justify-between w-1/3 bg-[#f2ece4]">
                        <div
                            className="bg-cover bg-center h-96 w-full aspect-square "
                            style={{
                                backgroundImage: `url('https://files.cdn-files-a.com/uploads/9376397/800_gi-668ebe1010cd7.jpg')`,
                            }}
                        ></div>
                        <div className="text-left h-96 w-full p-7 flex flex-col justify-center gap-6">
                            <h4 className="font-bold text-xl ">Clip-in Extensions</h4>
                            <p className='text-gray-800'>Easy-to-use clip-in extensions for instant length and volume that can be applied at home or by our professionals.</p>
                        </div>
                    </div>
                    {/* 2nd card */}
                    <div className="flex flex-col items-center justify-between w-1/3 bg-[#f2ece4]">
                        <div className="text-left h-96 w-full p-7 aspect-square flex flex-col justify-center gap-6">
                            <h4 className="font-bold text-xl">Clip-in Extensions</h4>
                            <p className='text-gray-800'>Easy-to-use clip-in extensions for instant length and volume that can be applied at home or by our professionals.</p>
                        </div>
                        <div
                            className="bg-cover bg-center h-96 w-full"
                            style={{
                                backgroundImage: `url('https://files.cdn-files-a.com/uploads/9376397/800_gi-668ebe4d74e99.jpg')`,
                            }}
                        ></div>
                    </div>
                    {/* 3rd card */}
                    <div className="flex flex-col items-center justify-between w-1/3 bg-[#f2ece4]">
                        <div
                            className="bg-cover bg-center h-96 w-full aspect-square"
                            style={{
                                backgroundImage: `url('https://files.cdn-files-a.com/uploads/9376397/800_gi-668ebe82cbd60.jpg')`,
                            }}
                        ></div>
                        <div className="text-left h-96 w-full p-7 flex flex-col justify-center gap-6">
                            <h4 className="font-bold text-xl">Clip-in Extensions</h4>
                            <p className='text-gray-800'>Easy-to-use clip-in extensions for instant length and volume that can be applied at home or by our professionals.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Services
