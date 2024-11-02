import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-infinite-logo-slider';

const LogoSlider = () => {

  const [logos, setLogos] = useState<LogoItem[]>([]);
  const [loading, setLoading] = useState(true);

  
  interface LogoItem {
    logo_url: string;
    name: string;
  }
  
  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/brands');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setLogos(data.data);
        console.log(data.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchLogo();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='py-20 md:py-28 lg:py-40'>
      <Slider
        width="200px"
        duration={3}
        pauseOnHover={false}
        blurBorders={false}
        blurBorderColor={'#fff'}
        
      >
        {logos.map((item, index) => (
          <Slider.Slide key={index}>
            <Image 
              src={item.logo_url} // Adjust this based on your API response structure
              alt={item.name || `Logo ${index + 1}`} // Adjust this based on your API response structure
              width={128}
              height={128}
              className='w-32'
            />
          </Slider.Slide>
        ))}
      </Slider>
    </div>
  );
}

export default LogoSlider;
