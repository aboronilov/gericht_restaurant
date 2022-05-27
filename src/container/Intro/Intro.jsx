import React, { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';


import './Intro.css';
import { meal } from '../../constants';

const Intro = () => {
   const vidRef = useRef();
   const [playVideo, setPlayVideo] = useState(false);

   const handleVideo = () => {
      setPlayVideo(!playVideo)

      if (!playVideo) {
         vidRef.current.play()
      } else{
         vidRef.current.pause()
      }
   }
   
   return (
      <div className='app__video'>
         <video
            src={meal}
            ref={vidRef}
            type="video/mp4"
            loop
            controls={false}
            muted
         />
         <div className="app__video-overlay flex__center">
            <div 
               className="app__video-overlay_circle flex__center"
               onClick={handleVideo}
            >
               {playVideo ? (
                  <BsPauseFill color="#FFF" fontSize={30}/>
               ) : (
                  <BsFillPlayFill color="#FFF" fontSize={30}/>
               )}
            </div>
         </div>
      </div>
   )
};

export default Intro;
