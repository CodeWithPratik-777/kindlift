import React, { useState, useEffect, useRef } from 'react';
import { SiLinkedin, SiGithub, SiSlack, SiGmail } from "react-icons/si";

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

const steps = [
  {
    id: '01',
    title: 'Mission & engagement',
    heading: 'How do we engage?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim neque, varius ut lorem eget, blandit venenatis felis. Sed tellus magna, elementum non commodo sit amet, finibus eu nunc. Integer bibendum gravida scelerisque.',
    icon: <SiLinkedin className="w-14 h-14" />,
    bg: '/assets/bg1.jpg'
  },
  {
    id: '02',
    title: 'Spread Global Awareness',
    heading: 'How do we spread awareness?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim neque, varius ut lorem eget, blandit venenatis felis. Sed tellus magna, elementum non commodo sit amet, finibus eu nunc. Integer bibendum gravida scelerisque.',
    icon: <SiGmail className="w-14 h-14" />,
    bg: '/assets/bg2.jpg'
  },
  {
    id: '03',
    title: 'Organize grant funding',
    heading: 'How do we fund change?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim neque, varius ut lorem eget, blandit venenatis felis. Sed tellus magna, elementum non commodo sit amet, finibus eu nunc. Integer bibendum gravida scelerisque.',
    icon: <SiGithub className="w-14 h-14" />,
    bg: '/assets/bg3.jpg'
  },
  {
    id: '04',
    title: 'Ignite sustainable Impact',
    heading: 'How do we create impact?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim neque, varius ut lorem eget, blandit venenatis felis. Sed tellus magna, elementum non commodo sit amet, finibus eu nunc. Integer bibendum gravida scelerisque.',
    icon: <SiSlack className="w-14 h-14" />,
    bg: '/assets/bg4.jpg'
  },
];

function Empower() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const intervalRef = useRef(null);
  const cardRef = useRef(null);
  const containerRef = useRef(null);

  const targetPosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });
  const idleTimeout = useRef(null);
  const isMovingRef = useRef(false);

  useEffect(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
      setProgressKey((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, [activeIndex]);

  useEffect(() => {
    let animationFrame;
    const animate = () => {
      const speed = 0.3;

      const dx = targetPosition.current.x - currentPosition.current.x;
      const dy = targetPosition.current.y - currentPosition.current.y;

      currentPosition.current.x += dx * speed;
      currentPosition.current.y += dy * speed;

      const card = cardRef.current;
      if (card) {
        card.style.transform = `
          translate(${currentPosition.current.x}px, ${currentPosition.current.y}px)
          rotate(-2deg)
        `;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    isMovingRef.current = true;

    const range = isMovingRef.current ? 220 : 80;
    const moveXRaw = ((offsetX - centerX) / centerX) * range;
    const moveYRaw = ((offsetY - centerY) / centerY) * range;

    const moveX = clamp(moveXRaw, -100, 100);
    const moveY = clamp(moveYRaw, -60, 60);

    targetPosition.current = { x: moveX, y: moveY };

    clearTimeout(idleTimeout.current);
    idleTimeout.current = setTimeout(() => {
      isMovingRef.current = false;
      targetPosition.current = { x: 0, y: 0 };
    }, 150);
  };

  const handleMouseLeave = () => {
    targetPosition.current = { x: 0, y: 0 };
    isMovingRef.current = false;
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-[#f1ece8] rounded-xl px-4 sm:px-10 py-8 font-inter text-[#153a43] overflow-x-hidden"
      id="Empower"
    >
      <div className="flex flex-wrap justify-between items-start gap-10 max-lg:flex-col">
        <div className="w-full lg:w-fill min-w-0 mt-10 lg:mt-0">
          <p className="mb-10 font-[600] text-[16px] leading-[24px]">Empower</p>

          {steps.map((step, index) => (
            <div key={step.id} className="relative mb-10 max-xs:mb-14">
              <h3
                onClick={() => {
                  setActiveIndex(index);
                  setProgressKey((prev) => prev + 1);
                }}
                className={`text-[clamp(27px,4vw,40px)] font-[700] leading-[1.2] w-auto max-xs:w-full cursor-pointer transition-all duration-200 ${
                  activeIndex === index ? 'opacity-100' : 'opacity-50'
                }`}
              >
                <span className="text-[clamp(16px,3vw,24px)] mr-4">{step.id}</span>
                {step.title}
                <div className="mt-4 w-full">
                  <div className="w-full h-[1px] bg-black/10 overflow-hidden rounded-full">
                    {activeIndex === index && (
                      <div
                        key={progressKey}
                        className="h-full bg-[#153a43] animate-progress"
                      ></div>
                    )}
                  </div>
                </div>
              </h3>
            </div>
          ))}
        </div>

        <div
          ref={cardRef}
          className="mt-2 max-lg:!rotate-0 max-lg:w-fill min-1080:absolute min-1080:right-36 max-lg:static rounded-md transition-transform duration-300 overflow-hidden bg-cover bg-center flex flex-col justify-center items-center px-5 py-6 text-center z-10 will-change-transform -rotate-2"
          style={{
            backgroundImage: `url(${steps[activeIndex].bg})`,
            height: '500px',
            width: '360px',
            maxWidth: '100%',
          }}
        >
          <div className="mb-6 flex items-center justify-center">
            {steps[activeIndex].icon}
          </div>
          <h2 className="mb-4 font-[700] leading-[1.3] text-[24px]">
            {steps[activeIndex].heading}
          </h2>
          <p className="text-[16px] font-[600] leading-[1.5] max-w-[500px] w-full max-lg:max-w-[90%]">
            {steps[activeIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Empower;
