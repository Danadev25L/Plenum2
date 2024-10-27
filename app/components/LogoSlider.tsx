import React from 'react';
import Image from 'next/image';
import image1 from "@/public/ab.png";
import image2 from "@/public/Infinity+logoL.png";
import image3 from "@/public/alapanaL.png";
import image4 from "@/public/armani+rocaL.png";
import image5 from "@/public/cobertL.png";
import image6 from "@/public/laminam.png"
import image7 from "@/public/prissmacerL.png";
import image8 from "@/public/rocca+.png"
import Slider from 'react-infinite-logo-slider';

const LogoSlider = () => {
  return (

    /* here i used react-infinite-logo-slider library to create a logo slider  the width in div represent
     the width of the slider and the duration is the time it takes to slide to the next logo 
     but width in each image represents the width of the image itself.
     */
      <div className='py-20 md:py-28 lg:py-40'>
            <Slider
      width="200px"
      duration={10}
      pauseOnHover={false}
      blurBorders={false}
      blurBorderColor={'#fff'}
    >
      <Slider.Slide>
        <Image src={image1} alt="any" className='w-24' />
      </Slider.Slide>
      <Slider.Slide>
        <Image src={image2} alt="any2" className='w-32' />
      </Slider.Slide>
      <Slider.Slide>
        <Image src={image3} alt="any3" className='w-32' />
      </Slider.Slide>
      <Slider.Slide>
        <Image src={image4} alt="any4" className='w-32' />
      </Slider.Slide>
      <Slider.Slide>
        <Image src={image5} alt="any5" className='w-32' />
      </Slider.Slide>
      <Slider.Slide>
        <Image src={image8} alt="any6" className='w-24' />
      </Slider.Slide>
      <Slider.Slide>
        <Image src={image7} alt="any7" className='w-32' />
      </Slider.Slide>
      <Slider.Slide>
        <Image src={image6} alt="any8" className='w-32' />
      </Slider.Slide>
    </Slider>
      </div>
  );
}

export default LogoSlider;
