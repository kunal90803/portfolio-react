import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import {fadeIn} from '../variants';
import {Link} from 'react-scroll';
const About = () => {
  const [ref,inView]=useInView({
    threshold:0.5,
  })
  return <section className='section mt-20 mb-20px' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* img */}
        {/* bg-about contains image */}
      <motion.div 
      variants={fadeIn('right',0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false ,amount :0.3}}
      className='flex-1 bg-about bg-contain  bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
        
        {/* text */}
      </motion.div>
      <motion.div 
      variants={fadeIn('left',0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false ,amount :0.3}}
      className='flex-1 '>
        <h2 className='h2 text-accent'>About me.</h2>
        <h3 className='h4 mb-4'>I'm a student from Indian Institute of Technology,Guwahati pursuing Chemical Engineering.
          I acquired projects and time management skills,as well as the ability to communicate with team members 
          while effectively meeting milestones and deadlines.
          I have made some personal web projects like CHAT-APP , AI-IMAGE-GENERATOR, and event schedular app.
        </h3>
        <div className='flex gap-x-8 items-center'>
          <Link to='contact' 
              activeClass='active'
              smooth={true}
              spy={true}><button className='btn btn-lg'>Contact Me</button></Link>
          {/* <a href='#' className='text-gradient btn-link'>My Portfolio</a> */}
        </div>
        </motion.div>
      </div>
    </div>



    </section>;
};

export default About;
