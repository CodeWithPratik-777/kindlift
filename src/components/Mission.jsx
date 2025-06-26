import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function Mission() {
  const containerRef = useRef(null);
  const words = `Our mission is to empower creators and changemakers by providing a platform that connects their visions with generous supporters. We believe that every story deserves to be told and every dream deserves a chance to flourish.`.split(" ");

  const [animatedWords, setAnimatedWords] = useState(new Set());

  return (
    <div className="flex flex-col px-10 md:px-28 py-20 max-lg:px-0 font-inter max-w-screen-xl mx-auto mb-[2rem]" id='OurMission'>
      <h1
        ref={containerRef}
        className="text-[#153a43] font-black text-[52px] max-lg:text-4xl leading-[62px] max-lg:leading-[1.4] max-xs:!leading-[1.2] text-balance flex flex-wrap gap-x-2"
      >
        <span className="!text-sm !font-semibold mr-12 max-xs:mr-5 whitespace-nowrap">Our Mission</span>

        {words.map((word, i) => {
          const wordRef = useRef(null);
          const wordInView = useInView(wordRef, { margin: '-10% 0px' });

          if (wordInView && !animatedWords.has(i)) {
            setAnimatedWords((prev) => new Set(prev).add(i));
          }

          const isAnimated = animatedWords.has(i);

          return (
            <motion.span
              key={i}
              ref={wordRef}
              className="inline-block"
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: isAnimated ? 1 : 0.2,
                y: isAnimated ? 0 : -10,
              }}
              transition={{ duration: 0.4, delay: i * 0.02 }}
            >
              {word}
            </motion.span>
          );
        })}
      </h1>

      <div className="flex gap-4 mt-10">
        <a
          href="#"
          className="bg-[#153a43] text-white font-medium text-sm px-8 py-2 rounded-full max-xs:px-4 hover:bg-[#0a262c] transition"
        >
          Our impact
        </a>
        <a href="#" className="text-[#0c2f36] font-medium text-sm flex items-center gap-1 hover:underline">
          Donate <span className="text-lg">›</span>
        </a>
      </div>
    </div>
  );
}

export default Mission;