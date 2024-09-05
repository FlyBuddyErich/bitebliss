import React, { useRef } from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
import mobileImg from '../../assets/bitebliss_mobile.png'

const AppDownload = () => {
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    const image = imageRef.current;
    const rect = image.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top; 
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -(y - centerY) / 40;
    const rotateY = (x - centerX) / 40;

    image.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    const image = imageRef.current;
    image.style.transition = 'transform 0.8s ease';
    image.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  const handleMouseEnter = () => {
    const image = imageRef.current;
    image.style.transition = 'transform 0.1s ease'; 
  };

  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience <br /> Download Mobile App</p>
        <img 
            src={mobileImg} 
            alt="Bitebliss Mobile App" 
            className='mobile-app' 
            ref={imageRef} 
            onMouseMove={handleMouseMove} 
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter} 
        />
        <div className='app-download-platforms'>
            <img src={assets.play_store} alt="Play Store" />
            <img src={assets.app_store} alt="App Store" />
        </div>
    </div>
  )
}

export default AppDownload;