import React from 'react';
import { SubHeading} from '../../components'
import {images} from '../../constants'
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
<SubHeading title=" chose the new flavour"/> 
<h1 className='app__header-h1'>The Key to Fine Dining</h1>
<p className='P__Opensans'style={{margin:'2rem 0'}}>Sit Tellus Sed SenectLß Vivamus Molestie.
Condimentum volutpat Morbi FaciliSiS Quam Scelerisque
Sapien. Et. Aliquam Arn« Tellus</p>
<button type='button' className='custom__button'>explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
<img src={images.welcome} alt="header img"/>
    </div>
  </div>
);

export default Header;
