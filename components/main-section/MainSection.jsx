import React from 'react'
import NewsSection from './NewsSection'

function MainSection() {
  return (
    <div className='flex justify-between'>
    <section className='w-[400px] h-[400px] 3xl:w-[572px] 3xl:h-[572px] rounded-2xl'>
      <img src='/assets/Group 6421.svg' alt='news-image' /> 
    </section>
    <section className='w-[400px] h-[400px] 3xl:w-[572px] 3xl:h-[572px] border border-[#707070] rounded-2xl'>
      <NewsSection />
    </section>
  </div>
  )
}

export default MainSection