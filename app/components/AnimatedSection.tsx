"use client"
import Section1 from './Section1';
import TileSection from './Section2';
import ProjectsScroller from './Section4';
import Section3 from './Section3';
import News from './Section5';
import Sponsors from './Sponsors';




const AnimatedSection = () => {

 
  
  return (
    <section className='bg-black text-white w-full overflow-x-hidden'>

      {/* first part of the animated section------------------------------------------------------------------------------------------------ */}

      <Section1 />

      {/*second part of the animated section--------------------------------------------------------------------------------*/}
  
      <TileSection />

    {/*third part of the animated section-----------------------------------------------------------------------------------*/}

      <Section3  />

    {/*fourth part of the animated section-----------------------------------------------------------------------------------*/}

    <ProjectsScroller />

  {/* fifth part of the animated section-----------------------------------------------------------------------------------*/}

   <News />

  {/*sixth part of the animated section-----------------------------------------------------------------------------------*/}

    <Sponsors />

    </section>
  )
}

export default AnimatedSection
