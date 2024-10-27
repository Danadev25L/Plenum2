"use client"
import Section1 from './Section1';
import TilesCarousel from './Carousel';
import ProjectsSlider from "@/app/components/animatied-section/ProjectSlider"
import Section3 from './Section3';
import News from './News';
import LogoSlider from '../LogoSlider';




const AnimatedSection = () => {
    return (
      <section className='bg-black text-white w-full overflow-x-hidden'>

        {/* first part of the animated section------------------------------------------------------------------------------------------------ */}

        <Section1 />

        {/*second part of the animated section--------------------------------------------------------------------------------*/}
  
        <TilesCarousel />

      {/*third part of the animated section-----------------------------------------------------------------------------------*/}

        <Section3  />

      {/*fourth part of the animated section-----------------------------------------------------------------------------------*/}

      <ProjectsSlider />

    {/* fifth part of the animated section-----------------------------------------------------------------------------------*/}

     <News />

    {/*sixth part of the animated section-----------------------------------------------------------------------------------*/}

      <LogoSlider />

      </section>
    )
}

export default AnimatedSection
