import React from 'react';

import { images } from '../../constants';
import './Chef.css';
import SubHeading from './../../components/SubHeading/SubHeading';

const Chef = () => (
   <div className='app__bg app__wrapper section__padding'>
      <div className="app__wrapper_img app__wrapper_img-reverse">
         <img src={images.chef} alt="chef" />
      </div>
      <div className="app__wrapper_info">
         <SubHeading title="Chef's word" />
         <h1 className="headtext__cormorant">What we believe in</h1>

         <div className="app__chef-content">
            <div className="app__chef-content_quote">
               <img src={images.quote} alt="quote" />
               <p className='p__opensans'>Lorem ipsum dolor sit amet, </p>
            </div>
            <p className='p__opensans'>consectetur adipisicing elit. Fugiat fugit ut sint placeat atque tempore, consequatur consequuntur beatae assumenda repellendus quia voluptates, magnam sequi sapiente, odio nam nihil nobis esse.</p>
         </div>

         <div className="app__chef-sign">
            <p>Liu Kang</p>
            <p className='p__opensans'>Chef & Founder</p>
            <img src={images.sign} alt="sign" />
         </div>

      </div>
   </div>
);

export default Chef;
