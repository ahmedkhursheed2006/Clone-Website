import React from "react";

function Categories() {

    return (
        <div className="bg-[#f4f4f4] py-12 w-full">
            <div className="text-center">
                <h2 className=" relative inline-block text-3xl  text-black pb-6 mb-6">
                    <div className="absolute bottom-0 w-[100%] border-t-[3px] border-[#d0ae81]"></div>
                    Categories</h2>

            </div>
            <div className="relative w-full flex items-center">
                
                {/* Cards Container */}
                <div className="flex flex-1 gap-6 items-center justify-center w-[80%] overflow-hidden" >
                    {/* Card 1 */}
                    <div className="relative w-[250px] bg-gray-100 shadow-lg rounded-lg overflow-hidden aspect-square bg-center  bg-cover"
                        style={{ backgroundImage: `url('https://files.cdn-files-a.com/uploads/9376397/800_gi-668eb9f864da6.jpg')` }}
                    >
                        <div className="absolute bg-black opacity-30 inset-0"></div>
                        <div className="relative flex flex-col justify-center w-full h-full  text-center text-white"><h3 className="text-lg font-bold">CLIP INS</h3>
                            <p className="text-sm ">1 PRODUCT</p>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="relative w-[250px] bg-gray-100 shadow-lg rounded-lg overflow-hidden aspect-square bg-center  bg-cover"
                        style={{ backgroundImage: `url('https://files.cdn-files-a.com/uploads/9376397/800_gi-668eba25b3db5.jpg')` }}>
                        <div className="absolute bg-black opacity-30 inset-0"></div>
                           <div className="relative flex flex-col justify-center w-full h-full  text-center text-white"><h3 className="text-lg font-bold">WIGS</h3>
                            <p className="text-sm ">1 PRODUCT</p>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="relative w-[250px] bg-gray-100 shadow-lg rounded-lg overflow-hidden aspect-square bg-center  bg-cover"
                        style={{ backgroundImage: `url('https://files.cdn-files-a.com/uploads/9376397/800_gi-668eba7ee41a9.jpg')` }}>
                            <div className="absolute bg-black opacity-30 inset-0"></div>
                        <div className="relative flex flex-col justify-center w-full h-full text-white text-center">
                            <h3 className="text-lg font-bold">TAPES</h3>
                            <p className="text-sm ">1 PRODUCT</p>
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className="relative w-[250px] bg-gray-100 shadow-lg rounded-lg overflow-hidden aspect-square bg-center  bg-cover"
                        style={{ backgroundImage: `url('https://files.cdn-files-a.com/uploads/9376397/800_gi-668eba935fad5.jpg')` }}>
                        <div className="absolute bg-black opacity-30 inset-0"></div>
                        <div className="relative flex flex-col justify-center w-full h-full text-white text-center">
                            <h3 className="text-lg font-bold">WEFTS</h3>
                            <p className="text-sm">1 PRODUCT</p>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default Categories;
