import React, {useState} from 'react';
import { RxDotFilled } from 'react-icons/rx';

import {ArrowLeftIcon, ArrowRightIcon, StarIcon} from "@heroicons/react/24/outline"

import laptopImage from '../assets/laptop.png';
import mujerImage from '../assets/mujer.jpg';
import homeImage from '../assets/home1.png';
import tdccImage from '../assets/tdcc.png';
import tecnoImage from '../assets/tecno.jpg';

const Slider = () => {
  const slides = [
    {
      url: laptopImage,
    },
    {
      url: mujerImage,
    },
    {
      url: homeImage,
    },
    {
      url: tdccImage,
    },
    {
      url: tecnoImage,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  
  return (
    <div name="home" className="max-w-[1400px] h-[640px] w-full m-auto py-20 px-4 relative group bg-zinc-50">
      <div 
        style={{backgroundImage: `url(${slides[currentIndex].url})`}} 
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>
        {/* Left arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-white/20 text-accent cursor-pointer mx-10">
        <ArrowLeftIcon onClick={prevSlide} className="w-5"/>
      </div>
        {/* Right arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-white/20 text-accent cursor-pointer mx-10">
        <ArrowRightIcon onClick={nextSlide} className="w-5"/>
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div 
            key={slideIndex} 
            onClick={() => goToSlide(slideIndex)} 
            className="text-2xl cursor-pointer text-accent">
            <RxDotFilled/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider