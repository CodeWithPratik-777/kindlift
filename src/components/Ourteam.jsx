import React from 'react'

function Ourteam() {
    return (
        <div className=" mt-10 flex flex-col px-10 md:px-28 py-20 max-xs:px-0 font-inter max-w-screen-xl mx-auto" id='OurTeam'>
            <span className="text-[16px] font-[600] text-center text-[#153a43] leading-[24px] mb-8">Our team</span>
            <h1 className="text-[#153a43] font-black text-[52px] text-center leading-[1.2]  max-w-[90%] mx-auto max-lg:text-4xl max-xs:leading-[1.2] break-words">
                Thanks to
                <span className="inline-block w-[1.5em] h-[1em] max-xs:w-[1.3em] max-xs:h-[1.3em] bg-[url('https://cdn.prod.website-files.com/68011fed23249a9699d7b42b/6802ffe03818196b62015f46_95f3e543daf5a38d2dfb07b450872c35_vorunteer.avif')] bg-center bg-no-repeat bg-cover rounded-md align-middle mx-2"></span>
                our clients, friends, partners. Thank you to
                <span className="inline-block w-[1.5em] h-[1em] max-xs:w-[1.3em] max-xs:h-[1.3em] bg-[url('https://cdn.prod.website-files.com/68011fed23249a9699d7b42b/6802ffdfb0c5bfcf76c27549_6537043b66a7bf3913dd28a02a0c43df_women.avif')] bg-top bg-no-repeat bg-cover rounded-md align-middle mx-2"></span>
                our team of volunteers
                <span className="inline-block w-[1.5em] h-[1em] max-xs:w-[1.3em] max-xs:h-[1.3em] bg-[url('https://cdn.prod.website-files.com/68011fed23249a9699d7b42b/6814ed06e370511f24fd8c62_voollunteer.avif')] bg-center bg-no-repeat bg-cover rounded-md align-middle mx-2"></span>
                who made this journey possible.
            </h1>



            <div className="flex mt-10">
                <a
                    href="#"
                    className="bg-[#153a43] text-white font-medium text-sm px-8 py-2 m-auto rounded-full hover:bg-[#0a262c] transition"
                >
                    Get Involved
                </a>
            </div>
        </div>
    )
}

export default Ourteam
