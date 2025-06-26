import React, { useRef, useEffect, useState } from 'react';
import { FaHandHoldingHeart } from 'react-icons/fa';

const ICON_COUNT = 5;
const ICON_SIZE = 96;
const MIN_DISTANCE = 150;

function DonateSection() {
  const containerRef = useRef(null);
  const iconRefs = useRef([]);
  const [positions, setPositions] = useState([]);
  const [visibleIcons, setVisibleIcons] = useState([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const isFarEnough = (x, y, existing) =>
      existing.every((pos) => {
        const dx = pos.x - x;
        const dy = pos.y - y;
        return Math.sqrt(dx * dx + dy * dy) >= MIN_DISTANCE;
      });

    const newPos = [];
    let attempts = 0;

    while (newPos.length < ICON_COUNT && attempts < 1000) {
      const maxX = containerWidth - ICON_SIZE;
      const maxY = containerHeight - ICON_SIZE;

      const x = Math.floor(Math.random() * maxX);
      const y = Math.floor(Math.random() * maxY);

      if (isFarEnough(x, y, newPos)) {
        newPos.push({ x, y });
      }
      attempts++;
    }

    setPositions(newPos);
    setVisibleIcons(Array(newPos.length).fill(false));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting && !visibleIcons[index]) {
            setTimeout(() => {
              setVisibleIcons((prev) => {
                const updated = [...prev];
                updated[index] = true;
                return updated;
              });
            }, index * 200);
          }
        });
      },
      { threshold: 0.3 }
    );

    iconRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [positions, visibleIcons]);

  const startDrag = (startX, startY, icon, container) => {
    const iconRect = icon.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const shiftX = startX - iconRect.left;
    const shiftY = startY - iconRect.top;

    let prevX = startX;
    let prevY = startY;
    let velocityX = 0;
    let velocityY = 0;

    icon.style.transition = 'none';

    const moveAt = (clientX, clientY) => {
      let newX = clientX - containerRect.left - shiftX;
      let newY = clientY - containerRect.top - shiftY;

      newX = Math.max(0, Math.min(newX, container.offsetWidth - icon.offsetWidth));
      newY = Math.max(0, Math.min(newY, container.offsetHeight - icon.offsetHeight));

      icon.style.left = `${newX}px`;
      icon.style.top = `${newY}px`;

      velocityX = clientX - prevX;
      velocityY = clientY - prevY;
      prevX = clientX;
      prevY = clientY;
    };

    const onMouseMove = (e) => moveAt(e.clientX, e.clientY);
    const onTouchMove = (e) => {
      if (e.touches.length > 0) moveAt(e.touches[0].clientX, e.touches[0].clientY);
    };

    const stop = () => {
      icon.style.cursor = 'grab';
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', stop);
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', stop);

      icon.style.transition = 'transform 0.9s ease-out, opacity 0.9s ease-out';

      let currentLeft = parseFloat(icon.style.left);
      let currentTop = parseFloat(icon.style.top);

      const inertia = () => {
        velocityX *= 0.95;
        velocityY *= 0.95;

        currentLeft += velocityX;
        currentTop += velocityY;

        currentLeft = Math.max(0, Math.min(currentLeft, container.offsetWidth - icon.offsetWidth));
        currentTop = Math.max(0, Math.min(currentTop, container.offsetHeight - icon.offsetHeight));

        icon.style.left = `${currentLeft}px`;
        icon.style.top = `${currentTop}px`;

        if (Math.abs(velocityX) > 0.5 || Math.abs(velocityY) > 0.5) {
          requestAnimationFrame(inertia);
        }
      };

      inertia();
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', stop);
    document.addEventListener('touchmove', onTouchMove, { passive: false });
    document.addEventListener('touchend', stop);
  };

  const handleMouseDown = (e, index) => {
    const icon = iconRefs.current[index];
    const container = containerRef.current;
    icon.style.cursor = 'grabbing';
    startDrag(e.clientX, e.clientY, icon, container);
  };

  const handleTouchStart = (e, index) => {
    const icon = iconRefs.current[index];
    const container = containerRef.current;
    icon.style.cursor = 'grabbing';
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      startDrag(touch.clientX, touch.clientY, icon, container);
    }
  };

  return (
    <div className="h-screen -mx-8 font-inter bg-gradient-to-b from-[#dac5dc] to-[#babcd9] flex justify-center items-center text-[#153a43]" id='Donate'>
      <div
        ref={containerRef}
        className="relative bg-[#fbf1f1] mx-10 h-[90%] w-full flex justify-center items-center flex-col rounded-2xl overflow-hidden max-xs:mx-5"
      >
        {positions.map((pos, index) => (
          <div
            key={index}
            ref={(el) => (iconRefs.current[index] = el)}
            data-index={index}
            onMouseDown={(e) => handleMouseDown(e, index)}
            onTouchStart={(e) => handleTouchStart(e, index)}
            className={`
              absolute cursor-grab select-none
              ${visibleIcons[index]
                ? 'opacity-100 translate-y-0 rotate-0'
                : 'opacity-0 translate-y-5 -rotate-6'}
            `}
            style={{
              left: `${pos.x}px`,
              top: `${pos.y}px`,
              zIndex: 1,
              width: `${ICON_SIZE}px`,
              height: `${ICON_SIZE}px`,
              touchAction: 'none',
              transition: visibleIcons[index]
                ? 'transform 0.9s ease-out, opacity 0.9s ease-out'
                : 'none',
            }}
          >
            <FaHandHoldingHeart className="text-[#ff7c4d] text-9xl pointer-events-none max-lg:text-7xl" />
          </div>
        ))}

        <div className="z-10 px-10 text-center max-w-5xl max-xs:!px-5">
          <h1 className="text-[52px] leading-[1.25] font-[900] max-lg:text-4xl max-lg:leading-[1.2] max-xs:!text-[1.7rem] max-xs:!leading-[1.1]">
            Help us turn small actions into lasting change. Your donation supports the people and projects building a better future — one step at a time.
          </h1>
          <div className="inline-block bg-[#ff7c4d] py-[6px] px-8 rounded-3xl mt-8 font-[500] leading-[21px] text-[16px] cursor-pointer hover:shadow-2xl">
            Donate
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonateSection;
