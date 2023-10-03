import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

import laptopImage from '../assets/laptop.png';
import mujerImage from '../assets/mujer.jpg';
import homeImage from '../assets/home1.png';
import tdccImage from '../assets/tdcc.png';
import tecnoImage from '../assets/tecno.jpg';

const imageStyle = {
  width: '1400px',
  height: '510px',
  objectFit: 'cover',
  borderRadius: '10px',
};

const dotStyle = {
  width: '10px',
  height: '10px',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  borderRadius: '50%',
  margin: '0 5px',
};

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
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel-container max-w-[1400px] h-[640px] w-full m-auto py-16 px-4 relative group bg-zinc-50">
      <div className="carousel-wrapper" style={{ touchAction: 'none' }}>
        <Carousel
          selectedItem={currentIndex}
          onChange={setCurrentIndex}
          emulateTouch={true}
          autoPlay={true}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          interval={5000}
          transitionTime={1000}
          className="border-none"
          renderIndicator={(clickHandler, isSelected, index) => {
            return (
              <div
                className="dot"
                onClick={clickHandler}
                style={{
                  ...dotStyle,
                  backgroundColor: isSelected ? 'rgba(0, 0, 0, 0.8)' : dotStyle.backgroundColor,
                }}
              ></div>
            );
          }}
        >
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex}>
              <img src={slide.url} alt={`Slide ${slideIndex}`} style={imageStyle} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-accent cursor-pointer mx-10">
        <ArrowLeftIcon onClick={prevSlide} className="w-6" />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-accent cursor-pointer mx-10">
        <ArrowRightIcon onClick={nextSlide} className="w-6" />
      </div>
    </div>
  );
}

export default Slider;