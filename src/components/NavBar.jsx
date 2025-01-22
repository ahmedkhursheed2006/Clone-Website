import React from 'react'
function NavBar({ activeSection, isShrunk }) {



    return (

        <nav className={`fixed scroll-smooth top-0 w-full flex flex-col lg:flex-row justify-between items-center bg-white px-4 z-[3000] transition-all ${isShrunk ? 'py-0 shadow-[0_2px_12px_2px_rgba(0_0_0/35%)]' : 'py-2'}`}>
            <div className="flex items-center ">
                <img className="h-16 mr-2.5" src="https://files.cdn-files-a.com/uploads/9376397/400_filter_nobg_668fb89eb8b6a.png" alt="Logo" />
                <span className="text-xl text-[#1e1d1d] font-normal [text-shadow:1px_1px_1px_rgba(0,0,0,0.1)]">COCO Extensions</span>
            </div>
            <div className="flex items-center ">
                <ul className="flex m-0 p-0 list-none">
                    <li className={`mx-[1px] my-0 ${activeSection === 'home' ? 'text-[#d4a373] border  rounded-[15px] border-solid border-[#d4a373]' : ''} hover:text-[#d4a373] hover:border hover: rounded-[15px] hover:border-solid hover:border-[#d4a373] px-4 py-[5px]  text-base`}><a className="no-underline font-bold scroll-smooth" href="#home">Home</a></li>
                    <li className={`mx-[1px] my-0 ${activeSection === 'about' ? 'text-[#d4a373] border  rounded-[15px] border-solid border-[#d4a373]' : ''}  hover:text-[#d4a373] hover:border hover: rounded-[15px] hover:border-solid hover:border-[#d4a373] px-4 py-[5px]  text-base`}><a className="no-underline font-bold " href="#about">About</a></li>
                    <li className={`mx-[1px] my-0 ${activeSection === 'store' ? 'text-[#d4a373] border  rounded-[15px] border-solid border-[#d4a373]' : ''}  hover:text-[#d4a373] hover:border hover: rounded-[15px] hover:border-solid hover:border-[#d4a373] px-4 py-[5px]  text-base`}><a className="no-underline font-bold " href="#store">Store</a></li>
                    <li className={`mx-[1px] my-0 ${activeSection === 'services' ? 'text-[#d4a373] border  rounded-[15px] border-solid border-[#d4a373]' : ''}  hover:text-[#d4a373] hover:border hover: rounded-[15px] hover:border-solid hover:border-[#d4a373] px-4 py-[5px]  text-base`}><a className="no-underline font-bold " href="#services">Services</a></li>
                    <li className={`mx-[1px] my-0 ${activeSection === 'testimonials' ? 'text-[#d4a373] border  rounded-[15px] border-solid border-[#d4a373]' : ''}  hover:text-[#d4a373] hover:border hover: rounded-[15px] hover:border-solid hover:border-[#d4a373] px-4 py-[5px]  text-base`}><a className="no-underline font-bold " href="#testimonials">Testimonials</a></li>
                    <li className={`mx-[1px] my-0 ${activeSection === 'contact' ? 'text-[#d4a373] border  rounded-[15px] border-solid border-[#d4a373]' : ''}  hover:text-[#d4a373] hover:border hover: rounded-[15px] hover:border-solid hover:border-[#d4a373] px-4 py-[5px]  text-base`}><a className="no-underline font-bold " href="#contact">Contact</a></li>
                </ul>
                <ul className="flex m-0 p-0 list-none">
                    <li className="mx-2.5 my-0"><a className="text-lg no-underline hover:text-[#d4a373] cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                        </svg>

                    </a></li>
                    <li className="mx-2.5 my-0"><a className="text-lg no-underline hover:text-[#d4a373] cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                        </svg>
                    </a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
