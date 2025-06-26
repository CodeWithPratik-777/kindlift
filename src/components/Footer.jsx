import React from 'react'
import { FaHeart } from 'react-icons/fa';


function Footer() {
    return (
        <div className='h-auto p-10 -mx-8 font-inter bg-gradient-to-b from-[#babcd9] to-[#92b1d7] max-xs:-mt-1'>
            <div className='h-1/4 flex max-xs:flex-col'>
                <div className='w-1/2 text-[#153a43] flex justify-center flex-col max-xs:w-full'>
                    <h1 className='text-[24px] leading-[36px] font-[900]'>KindLift</h1>
                    <p className='text-[14px] leading-[21px] font-[400] max-lg:mr-2'>
                        Be the first to hear about our impacts and new volunteer opportunities!
                    </p>
                </div>

                <div className='w-1/2 flex justify-center items-end flex-col max-xs:w-full max-xs:mt-5'>
                    <div className='max-xs:w-full'>
                        <p className='text-[16px] leading-[24px] font-[600] text-[#153a43]'>Subscribe</p>

                        <div className='border-[1px] border-[#153a43] rounded-3xl w-fit mt-1 max-lg:w-max max-xs:flex max-xs:items-center max-xs:!w-auto max-xs:overflow-hidden'>
                            <input
                                type="email"
                                placeholder={window.innerWidth <= 1024 ? 'Email' : 'Enter your email'}
                                className="px-4 py-2 bg-transparent placeholder-[#153a43] outline-none mr-5 max-lg:w-[20vw] max-xs:flex-1 max-xs:min-w-0"
                            />
                            <input
                                type="submit"
                                value="Subscribe"
                                className="bg-[#153a43] text-white px-8 py-2 text-[16px] rounded-3xl leading-[24px] font-[400] cursor-pointer max-lg:px-4"
                            />
                        </div>

                        <p className='text-[12px] leading-[18px] font-[400] text-[#153a43] my-2'>
                            By subscribing you agree to with our <a href="#" className='underline'>Privacy Policy</a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="h-auto">
                <div className="flex flex-col h-full">
                    <h1 className="text-white font-[800] text-[clamp(3rem,18vw,21rem)] leading-none text-center max-lg:mt-10">
                        KindLift
                    </h1>

                    <div className="border-[1px] opacity-[0.7] border-[#153a43] mb-2"></div>

                    <div className="flex flex-grow py-5 max-h-min max-xs:flex-col">
                        <div className="flex-1 h-fit max-xs:m-auto">
                            <a href="#" className='text-[14px]  leading-[21px] font-[400] text-[#153a43] underline mr-6'>Privacy Policy</a>
                            <a href="#" className='text-[14px]  leading-[21px] font-[400] text-[#153a43] underline'>Terms of Service</a>
                        </div>
                        <div className="flex-1 h-fit max-xs:m-auto max-xs:mt-2">
                            <p className='text-[14px] leading-[21px] font-[400] text-[#153a43] float-right'>&copy; 2025 KindLift. All rights reserved</p>
                        </div>
                    </div>
                    <div className='h-auto'>
                        <p className='text-[14px] leading-[21px] font-[400] text-[#153a43] text-center flex items-center justify-center gap-1'>
                            Made with <FaHeart className='text-red-500' /> by
                            <a
                                href="https://www.linkedin.com/in/pratik-mane-6677a824b/"
                                className='underline ml-1'
                                target='_blank'
                                rel="noopener noreferrer"
                            >
                                PRATIK
                            </a>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
