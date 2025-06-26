import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }

    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  return (
    <div className='relative font-inter z-50'>
      <div className='h-16 flex items-center justify-between px-4 w-full bg-white'>
        <h2 className='text-2xl font-[900] text-[#153a43]'>KindLift</h2>

        <div className='hidden lg:flex flex-1 justify-end font-semibold text-[16px] leading-6'>
          <ul className='flex'>
            <li className='mx-5'>
              <a href="#OurMission" onClick={(e) => handleLinkClick(e, '#OurMission')}>Our mission</a>
            </li>
            <li className='mx-5'>
              <a href="#Empower" onClick={(e) => handleLinkClick(e, '#Empower')}>Empower</a>
            </li>
            <li className='mx-5'>
              <a href="#OurTeam" onClick={(e) => handleLinkClick(e, '#OurTeam')}>The team</a>
            </li>
            <li className='mx-5'>
              <a href="#OurImpact" onClick={(e) => handleLinkClick(e, '#OurImpact')}>Our impact</a>
            </li>
            <li className='mx-5'>
              <a href="#Donate" onClick={(e) => handleLinkClick(e, '#Donate')} className='bg-[#ff7c4d] text-[#153a43] py-[0.55rem] px-8 rounded-full'>
                Donate
              </a>
            </li>
          </ul>
        </div>

        <div className='block lg:hidden z-50'>
          <button onClick={() => setIsOpen(!isOpen)} className='text-[#153a43]'>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={`
          absolute top-full left-0 w-full bg-white overflow-hidden lg:hidden z-40
          transition-[max-height] duration-500 ease-in-out
          ${isOpen ? 'max-h-screen' : 'max-h-0'}
        `}
      >
        <div className='flex flex-col min-h-[88vh] items-start pt-6 px-6 font-semibold text-[18px] leading-10'>
          <a href="#OurMission" onClick={(e) => handleLinkClick(e, '#OurMission')} className='mb-4'>Our mission</a>
          <a href="#Empower" onClick={(e) => handleLinkClick(e, '#Empower')} className='mb-4'>Empower</a>
          <a href="#OurTeam" onClick={(e) => handleLinkClick(e, '#OurTeam')} className='mb-4'>The team</a>
          <a href="#OurImpact" onClick={(e) => handleLinkClick(e, '#OurImpact')} className='mb-4'>Our impact</a>
          <a href="#Donate" onClick={(e) => handleLinkClick(e, '#Donate')} className='mt-4 bg-[#ff7c4d] text-[#153a43] w-full text-center px-6 py-2 rounded-full'>
            Donate
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
