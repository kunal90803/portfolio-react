import React from 'react';
import { motion } from 'framer-motion';
import {fadeIn} from '../variants';

const Contact = () => {
  return <section className='py-16 lg:section mt-20' id='contact'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
      <motion.div 
      variants={fadeIn('right',0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false ,amount :0.3}}
      className='flex-1  flex justify-start items-center'>
        <div>
          <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide ' >
            Get in Touch
          </h4>
          <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's Work <br/> Together</h2>
        </div>
      </motion.div>
      <motion.form
      variants={fadeIn('left',0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false ,amount :0.3}}
      className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
      action="https://formsubmit.co/55fa795031cbc578b9e4b1984bb8734a" method="POST">
        <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type='text' name="Name" placeholder='Your Name'/>
        <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type='email' name="email" placeholder='Your Email'/>
        <textarea className='bg-transparent border-b py-12 resize-none outline-none w-full placeholder:text-white focus:border-accent transition-all' name="message" placeholder='Your Message'></textarea>
        <button type="submit" className='btn btn-lg'>SEND MESSAGE</button>
      </motion.form>

      </div>


    </div>
    </section>;
};

export default Contact;
