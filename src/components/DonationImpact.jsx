import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function DonationImpact() {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className='h-auto mb-36 font-inter text-[#153a43] max-lg:!mb-20' id='OurImpact'>
      <div className='h-[50vh] mt-20 flex max-xs:flex-col max-lg:h-auto'>
        <div className='w-full h-full flex items-center max-lg:pr-14 max-lg:items-start max-xs:!pr-0'>
          <h1 className='text-[52px] leading-[65px] font-[900] max-lg:text-[40px] max-lg:leading-[50px] max-xs:!text-[35px] max-xs:!leading-[40px]'>
            From quiet efforts to real results: The ripple effect of every donation
          </h1>
        </div>
        <div className='w-full h-full flex items-center max-lg:items-start'>
          <p className='text-[20px] leading-[30px] font-[400] max-xs:mt-5'>
            With every donation, we've been able to reach farther and do more. In just the past 12 months, we’ve provided resources to over 50 grassroots initiatives, supported 100+ volunteers working on the ground, and directly impacted communities facing real challenges—with real solutions. From mental health support to educational access, you turned ideas into measurable change.
          </p>
        </div>
      </div>

      <div className='h-[105vh] flex mt-8 max-lg:flex-col max-lg:h-auto max-xs:mt-12'>
        <div
          ref={ref1}
          className='w-full p-5 rounded-3xl bg-cover bg-center bg-no-repeat max-lg:mb-5 max-xs:!h-[42vh]'
          style={{ backgroundImage: `url(/assets/bg1.jpg)` }}
        >
          <div className='h-[20%]'>
            <h3 className='text-[24px] leading-[34px] font-[700] max-xs:text-lg'>
              Projects supported through local programs
            </h3>
          </div>
          <div className='h-[80%] text-right flex flex-col justify-end'>
            <h3 className='text-[123px] leading-[160px] font-[700] max-lg:text-[80px] max-lg:leading-[100px] max-xs:!text-[55px] max-xs:!leading-[70px]'>
              {inView1 && <CountUp end={256} duration={2} />}
            </h3>
            <div className='border-[1px] opacity-[0.7] border-[#153a43] mb-2'></div>
            <p className='text-[16px] leading-[24px] font-[400] max-lg:ml-40 max-xs:text-[14px] max-xs:!leading-[20px] max-xs:!ml-0'>
              Over 25,000 people directly supported through community programs, crisis response, and ongoing care initiatives.
            </p>
          </div>
        </div>

        <div className='w-full ml-7 flex flex-col max-lg:w-fill max-lg:flex-row max-lg:mb-5 max-lg:ml-0 max-xs:!flex-col'>
          <div className='h-1/2 rounded-3xl bg-cover bg-center bg-no-repeat mb-7 max-lg:w-1/2 max-lg:h-auto max-lg:mb-0 max-lg:mr-5 max-xs:!h-[42vh] max-xs:!w-auto max-xs:!mr-0'
            style={{ backgroundImage: `url(/assets/DonationImpact/img1.jpg)` }}
          ></div>
          <div
            ref={ref2}
            className='h-1/2 p-5 rounded-3xl bg-cover bg-center bg-no-repeat max-lg:w-1/2 max-lg:h-auto max-xs:!w-auto max-xs:mt-5 max-xs:!h-[42vh]'
            style={{ backgroundImage: `url(/assets/bg4.jpg)` }}
          >
            <div className='h-[20%] max-lg:pb-8'>
              <h3 className='text-[24px] leading-[34px] font-[700] max-xs:text-lg'>
                Volunteer & Project Support
              </h3>
            </div>
            <div className='h-[80%] text-right flex flex-col justify-end'>
              <h3 className='text-[123px] leading-[160px] font-[700] opacity-[0.9] max-lg:text-[80px] max-lg:leading-[100px] max-xs:!text-[55px] max-xs:!leading-[70px]'>
                {inView2 && <CountUp end={120} duration={2} />}+
              </h3>
              <div className='border-[1px] opacity-[0.7] border-[#153a43] mb-2'></div>
              <p className='text-[16px] leading-[24px] font-[400] max-xs:text-[14px] max-xs:!leading-[20px]'>
                120+ local volunteers mobilized across 60+ grassroots projects in the past year.
              </p>
            </div>
          </div>
        </div>

        <div className='w-full ml-7 flex flex-col max-lg:w-fill max-lg:flex-row max-lg:ml-0 max-xs:!flex-col-reverse'>
          <div
            ref={ref3}
            className='h-1/2 rounded-3xl p-5 mb-7 bg-cover bg-center bg-no-repeat max-lg:w-1/2 max-lg:h-auto max-lg:mb-0 max-lg:mr-5 max-xs:!w-auto max-xs:!mr-0 max-xs:!h-[42vh]'
            style={{ backgroundImage: `url(/assets/bg3.jpg)` }}
          >
            <div className='h-[20%] max-lg:pb-8'>
              <h3 className='text-[24px] leading-[34px] font-[700] max-xs:text-lg'>
                Resource Distribution
              </h3>
            </div>
            <div className='h-[80%] text-right flex flex-col justify-end '>
              <h3 className='text-[123px] leading-[160px] font-[700] max-lg:text-[80px] max-lg:leading-[100px] max-xs:!text-[55px] max-xs:!leading-[70px]'>
                {inView3 && <CountUp end={85} duration={2} />}+
              </h3>
              <div className='border-[1px] opacity-[0.7] border-[#153a43] mb-2'></div>
              <p className='text-[16px] leading-[24px] font-[400] max-xs:text-[14px] max-xs:!leading-[20px]'>
                of every dollar goes directly to on-the-ground efforts, tools, and services making a difference where it’s needed most.
              </p>
            </div>
          </div>
          <div className='h-1/2 rounded-3xl bg-cover bg-center bg-no-repeat max-lg:w-1/2 max-lg:h-auto max-xs:!h-[42vh] max-xs:!w-auto max-xs:mb-5'
            style={{ backgroundImage: `url(/assets/DonationImpact/img2.jpg)` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default DonationImpact;
