import React from 'react';
import Slider from 'react-slick';
import NewsSection from './NewsSection';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  '/assets/Group 6421.svg',
  '/assets/tv-new.jpg',
  '/assets/5364713.jpg',
  '/assets/Group 6421.svg',
  '/assets/tv-new.jpg',
  '/assets/5364713.jpg',
];

function MainSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
  };

  return (
    <div className='flex flex-col xl:flex-row justify-center items-center gap-6 lg:justify-between'>
      <section className='w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] 3xl:w-[572px] 3xl:h-[572px] rounded-2xl relative'>
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className='relative'>
              <img src={src} alt={`slide-${index}`} className='rounded-2xl' />
              <p className='absolute bottom-2 right-3 text-right text-white text-[14px] uppercase tracking-[1.5px]'>Israil/Ghaza</p>
            </div>
          ))}
        </Slider>
      </section>
      <section className='w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] 3xl:w-[572px] 3xl:h-[572px] border border-[#707070] rounded-2xl'>
        <NewsSection />
      </section>
    </div>
  );
}

export default MainSection;
