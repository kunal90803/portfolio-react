import React from 'react';
import Logo from '../assets/logo.svg';
import {Link} from 'react-scroll';
import Image1 from '../assets/PORT.png';

const Header = () => {
  return( <header className='py-8 mb-20'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='#'>
          <img src={Image1} alt =''/>
          {/* <img src="https://flamingtext.com/logo/Design-Fortune?_variations=true&text=KUNAL+PAL&_loc=wizard" alt =''/> */}
        </a>
        <Link to='contact' 
              activeClass='active'
              smooth={true}
              spy={true}>
        <button 
        
        className='btn btn-sm'>
          Work With me
          </button>
          </Link>
      </div>
    </div>
  </header>
  );
};

export default Header;
