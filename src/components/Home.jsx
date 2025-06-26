import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const text = "KindLift";
const delays = text.split("").map(() => Math.random() * 1); 

function Home() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div
            className="relative min-h-[88vh] max-xs:min-h-[80vh] mb-10 bg-cover bg-no-repeat bg-center rounded-xl flex flex-col justify-end"
            style={{ backgroundImage: "url('/assets/homebg.avif')" }}
        >
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#000000d6] to-transparent rounded-b-xl pointer-events-none"></div>

            <div className="flex items-end max-lg:items-center overflow-hidden font-inter max-lg:flex-col max-lg:!mb-[3vh]">

                <div
                    ref={ref}
                    className="w-full pl-4 flex items-center z-[1] max-xs:!-mb-[5vh] h-[35vh] max-lg:!h-auto"
                >
                    <h1 className="text-[#ff7c4d] font-[900] leading-none truncate whitespace-nowrap max-xs:mb-10 text-[clamp(45px,13vw,215px)] flex">
                        {text.split("").map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : {}}
                                transition={{ delay: delays[i], duration: 1 }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </h1>
                </div>

                <div className="w-[60%] flex items-end justify-center p-4 pt-10 z-[1] max-lg:w-full max-lg:px-6 max-lg:pt-4 h-[35vh] max-lg:!h-auto ">
                    <p className="text-white font-semibold leading-snug text-[20px] max-w-[32ch] mb-[5vh] max-lg:mb-0 max-lg:max-w-max">
                        Join us in transforming dreams into reality. Your support can make a
                        significant impact on the causes that matter most.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Home;
