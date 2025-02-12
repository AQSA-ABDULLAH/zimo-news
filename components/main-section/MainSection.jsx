import React from 'react'
import NewsSection from './NewsSection'

function MainSection() {
  return (
    <div className='flex justify-between'>
    <section className='w-[572px] h-[572px]'>
      <img src='/assets/Group 6421.svg' alt='news-image' /> 
    </section>
    <section className='w-[572px] h-[572px] border border-[#707070] rounded-3xl'>
      <NewsSection />
    </section>
  </div>
  )
}

export default MainSection