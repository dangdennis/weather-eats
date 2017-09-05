import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './landing-page';
import brand_img from './imgs/nav_image.png'
import "./style.min.css";

const App = () => (
    <div>
      <nav className='navbar bg-inverse'>
        <img className='navbar-brand' src={brand_img} />
      </nav>
    	<LandingPage />
    </div>
);

export default App;
