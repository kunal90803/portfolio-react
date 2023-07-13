import React from 'react';
import img1 from '../assets/chatter.png';
import img2 from '../assets/ai-image.png';
import { motion } from 'framer-motion';
import {fadeIn} from '../variants';
const Work = () => {
  return <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex  flex-col lg:flex-row gap-x-10'>
        <motion.div
        variants={fadeIn('left',0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false ,amount :0.3}}
         className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          {/* text */}
          <div>
            <h2 className='h2 leading-tight text-accent'>
              My Latest<br/>
              Work
            </h2>
            <button className='btn btn-sm gap-y-6'>Projects</button>
            <p>
              <span className='h3 leading-tight text-accent-'>MERN Chat App</span>
              <p>
              Developed a robust MERN chat application that enables real-time communication,private chats,search-friends and seamless collaboration among users.<br/>
              {/* Implemented features such as private chats,search-friends, real-time messaging, and user authentication to ensure a secure and interactive chatting experience. */}
              </p>
              <span className='h3 leading-tight text-accent-'>AI Image Generator</span>
              <p>
              Successfully generated a wide range of images, showcasing the model's ability to capture various styles, themes, and artistic concepts.</p>
            </p>
            
          </div>
          {/* image */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className=' group-hover:bg-black/30 w-full h-full absolute z-40 transition-all duration-300 mt-100px'></div>
            <img className="group-hover:scale-125 transition-all duration-500" src={img1} alt=""/>
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient font-semibold text-2xl'>WEB CHAT APPLICATION</span>
              </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>ChatSync</span>
            </div>
          </div>
          {/* <div>image</div> */}
        </motion.div>
        <motion.div
        variants={fadeIn('right',0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false ,amount :0.3}}
        className='flex-1 flex flex-col gap-y-40'>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className=' group-hover:bg-black/30 w-full h-full absolute z-40 transition-all duration-300 mt-100px'></div>
             <img className="group-hover:scale-125 transition-all duration-500" src={img2} alt=""/>
               <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient font-semibold text-2xl'>OPEN-AI API</span>
               </div>
               <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>IMAGE GENERATOR</span>
               </div>
            </div>
            {/* text below */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                
                 <span className='m-10 h2 leading-tight text-accent'> LINK FOR PROJECTS </span><br/>
                 <span className='m-10 underline text-3xl'> <a href='https://chat-app-seven-ecru.vercel.app/login' target='_blank'> CHAT-APP</a> </span><br/>
                 <span className='m-10 underline text-3xl'> <a href='https://ai-image-front.vercel.app/?vercelToolbarCode=o02DaCilWBgz6pS' target='_blank'> IMAGE GENERATOR</a> </span>
                 
                  
                
            </div>
        </motion.div>

      </div>
    </div>
  </section>;
};

export default Work;
