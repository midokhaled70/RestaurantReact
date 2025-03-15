import React,{useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images'

import './Navbar.css';

const Navbar = () => {
const [toggleMenu,setToggleMenu]=React.useState(false);
  return(
    <nav className='app__navbar'>
    <div className='app__navbar-logo'>
 <img src={images.gericht} alt="app logo"/>
    </div>
    <ul className='app__navbar-links'>
     <li className='P__Opensans'><a href='#home'>Home</a></li>
     <li className='P__Opensans'><a href='#about'>About</a></li>
     <li className='P__Opensans'><a href='#menu'>Menu</a></li>
     <li className='P__Opensans'><a href='#awards'>Awards</a></li>
     <li className='P__Opensans'><a href='#contact'>Contact</a></li>
     
    </ul>
    <div className='app__navbar-login'>
 <a href='#login' className='P__Opensans'>Log In / Register</a>
 <div />
 <a href='/' className='P__Opensans'>Book Table</a>
    </div>
 
 <div className='app__navbar-smallscreen'>
 <GiHamburgerMenu className='app__hamburger' fontSize={27} onClick={()=>setToggleMenu(true)}/>
 


{
  toggleMenu && (
    <div className='app__navbar-smallscren_overlay flex__center slide-bottom '>
    <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={()=>setToggleMenu(false)}/>
   
    <ul className='app__navbar-smallscren-links'>
         <li className='P__Opensans'><a href='#home'>Home</a></li>
         <li className='P__Opensans'><a href='#about'>About</a></li>
         <li className='P__Opensans'><a href='#menu'>Menu</a></li>
         <li className='P__Opensans'><a href='#awards'>Awards</a></li>
         <li className='P__Opensans'><a href='#contact'>Contact</a></li>
         
        </ul>
    </div>
    
    
  )
}


 
 
   
  
 </div>
 
 
 
   </nav>
  );
}

 
  


export default Navbar;
