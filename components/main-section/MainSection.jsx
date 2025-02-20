import React from 'react';
import NewsSection from './NewsSection';

function MainSection() {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center gap-6 lg:justify-between'>
      <section className='w-[400px] h-[400px] 3xl:w-[572px] 3xl:h-[572px] rounded-2xl relative'>
        <img src='/assets/Group 6421.svg' alt='news-image' />
        <p className='absolute bottom-2 right-3 text-right text-white text-[14px] uppercase tracking-[1.5px]'>Israil/Ghaza</p>
      </section>
      <section className='w-[400px] h-[400px] 3xl:w-[572px] 3xl:h-[572px] border border-[#707070] rounded-2xl'>
        <NewsSection />
      </section>
    </div>
  );
}

export default MainSection;
