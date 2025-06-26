import React, { useEffect, useRef, useState } from 'react';
import { FaHandHoldingHeart } from "react-icons/fa";

function Ourvision() {
  const sectionRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);
  const lastScrollY = useRef(0);

  const wordChain = [
    'Inspire',
    <FaHandHoldingHeart className="text-[56px]" />,
    'Take Action',
    <FaHandHoldingHeart className="text-[56px]" />,
    'Empower',
    <FaHandHoldingHeart className="text-[56px]" />,
  ];

  const repeatedChain = Array(4).fill(wordChain).flat();

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const inView = rect.top <= window.innerHeight && rect.bottom >= 0;

      if (inView) {
        const currentScroll = window.scrollY;
        const delta = currentScroll - lastScrollY.current;
        setScrollX(prev => Math.max(Math.min(prev + delta * -0.1, 40), -40));
        lastScrollY.current = currentScroll;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className='h-auto pb-16 bg-gradient-to-r from-[#d4c3db] to-[#b8b8d6] -mx-8 font-inter overflow-hidden'>
      <div
        className='h-[20vh] flex items-center text-[56px] font-[900] leading-[84px] text-[#ff7c4d] whitespace-nowrap '
        style={{
          transform: `translateX(${scrollX}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div className="flex gap-10 pl-[15vw] max-xs:pl-[22vw] -ml-[20vw]">
          {repeatedChain.map((item, idx) => (
            <span key={idx} className="flex items-center">{item}</span>
          ))}
        </div>
      </div>

      <div className='h-[50vh] flex items-center justify-center flex-col max-lg:mt-5 max-lg:h-auto'>
        <span className="text-[16px] font-[600] text-[#153a43] leading-[24px] mb-5 block">Our vision</span>
        <h1 className='text-[#153a43] text-[52px] leading-[65px] font-[900] text-center mx-[16vw] max-lg:mx-10 max-xs:!mx-2 max-lg:text-[40px] max-lg:leading-[50px] max-xs:!text-[32px] max-xs:!leading-[40px]'>We imagine a future where kindness leads and progress follows.</h1>
        <p className='text-[#153a43] text-[20px] leading-[30px] font-[400] text-center mx-[16vw] mt-5 max-lg:mx-10 '>Our work is grounded in the belief that small actions can spark lasting change. As the world evolves, we stay committed to uplifting efforts that empower and connect. We act not out of duty, but from a deep hope for a better tomorrow—whatever shape it takes.</p>
      </div>
      <div className='h-[80vh] flex justify-evenly mt-10 -mx-16 max-lg:mt-20 max-lg:-mx-[40rem]'>
        <div className='w-full flex'>
          <div className='h-[70%] m-auto w-full rounded-2xl overflow-hidden'>
            <img
              src="/assets/ourvision/img1.avif"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div className=' w-full px-3'>
          <div className='!h-[45%] mb-3 rounded-2xl overflow-hidden'>
            <img
              src="/assets/ourvision/img2.jpg"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className='!h-[55%] rounded-2xl overflow-hidden'>
            <img
              src="/assets/ourvision/img3.jpg"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div className='w-[200%] flex max-lg:w-[90%] max-xs:!w-[70%]'>
          <div className='h-[90%] m-auto w-full rounded-2xl overflow-hidden max-lg:h-[70%] max-xs:!h-full'>
            <img
              src="/assets/ourvision/img5.jpg"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div className='w-full px-3'>
          <div className='!h-[55%] mb-3 rounded-2xl overflow-hidden'>
            <img
              src="/assets/ourvision/img6.jpg"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className='!h-[45%] rounded-2xl overflow-hidden'>
            <img
              src="/assets/ourvision/img7.jpg"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div className='w-full flex'>
          <div className='h-[70%] m-auto w-full rounded-2xl overflow-hidden'>
            <img
              src="/assets/ourvision/img8.avif"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourvision;
