import React from 'react'

function Contact() {
    return (
        <div className='bg-[#f2ece4] py-[100px] w-full'>
            <div className='text-center py-[50px]'>
                <h1 className=' relative inline-block mx-2 pb-3 text-3xl '>Contact
                <div className="absolute bottom-0 w-[100%] border-t-[3px] border-[#d0ae81]"></div>
                </h1>
            </div>
            <div className='flex text-center'>
                <div className='flex-1 text-center font-medium'>
                    <h4>United Kingdom</h4>
                    <a className="inline-flex items-center text-[#d0ae81] hover:underline" href="tel:+44-7512307397">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#d0ae81"
                            className="size-4 mr-2"
                        >
                            <path
                                fillRule="evenodd"
                                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        +44-7512307397
                    </a>
                    <br />
                    <a className="inline-flex items-center text-[#d0ae81] hover:underline" href="mailto:bethdonaldson6mw@gmail.com">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="#d0ae81"
                            className="size-4 mr-2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        bethdonaldson6mw@gmail.com</a><br />
                    <p className='inline-flex items-center text-black no-underline'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="#d0ae81"
                            className="size-4 mr-2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        Mon-Fri - 08:00-19:00</p>
                </div>
                <div className='flex-1 text-left'>
                    <form>
                        <div className='flex gap-8 w-[86%] pb-3'>
                            <div><input className='bg-white w-full border-gray-300 border-[1px] rounded-[4px] pl-4 pr-[60px] py-3' type="text" name='Name' placeholder='Name' /></div>
                            <div><input className='bg-white w-full border-gray-300 border-[1px] rounded-[4px] pl-4 pr-[60px] py-3' type="text" name="Number" placeholder='Number' /> </div>
                        </div>
                        <div><input className='bg-white w-[86%] mb-3 border-gray-300 border-[1px] rounded-[4px] pl-4 py-3' type="email" name='Email address' placeholder='Email address' /></div>
                        <div><input className='bg-white w-[86%] mb-3 pb-[50px] border-gray-300 border-[1px] rounded-[4px] pl-4 py-3' type="text" name='Message' placeholder='Message' /></div>
                        <button className='text-center text-black bg-[#d0ae81] border-[1px] border-[#d0ae81] w-[86%] rounded-xl py-3'>Contact Us</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
