import React, { useRef, useState, useEffect } from 'react';
import './Presentation.css';
import burgerSticker from '../../assets/logoburger.png';
import rightImage from '../../assets/bitebliss_promo1.png';
import mobile from '../../assets/bitebliss_mobile1.png';
import mobile1 from '../../assets/bitebliss_mobile.png';
import gif from '../../assets/gif.gif';
import media from '../../assets/media.png';
import instagram from '../../assets/instagram.png';
import x from '../../assets/x.png';
import arrowUp from '../../assets/arrow_up.png';

const Presentation = () => {
    const imageRef1 = useRef(null);
    const imageRef2 = useRef(null);
    const [showArrow, setShowArrow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setShowArrow(true);
            } else {
                setShowArrow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleMouseEnter = (imageRef) => {
        const image = imageRef.current;
        image.style.transition = 'transform 0.5s ease';
        image.style.transform = `scale(1.05)`;
    };

    const handleMouseLeave = (imageRef) => {
        const image = imageRef.current;
        image.style.transition = 'transform 0.5s ease';
        image.style.transform = `scale(1)`;
    };

    return (
        <div className="presentation-page">
            <div className="presentation-box">
                <div className="left-side">
                <a href="#"><img src={burgerSticker} alt="" className='burger-logo' /></a>
                    <h1>BITEBLISS</h1>
                    <p>Best Burgers In The Universe!</p>
                    <p>Try It Yourself!</p>
                    <a href="#"><button>Let me see!</button></a>
                </div>
                <div className="right-side">
                    <img src={rightImage} alt="" />
                </div>
            </div>
            <div className="bottom-section">
                <div className="bottom-container">
                    <div className="bottom-left">
                        <img
                            src={mobile}
                            alt=""
                            ref={imageRef1}
                            onMouseEnter={() => handleMouseEnter(imageRef1)}
                            onMouseLeave={() => handleMouseLeave(imageRef1)}
                        />
                        <img
                            src={mobile1}
                            alt=""
                            ref={imageRef2}
                            onMouseEnter={() => handleMouseEnter(imageRef2)}
                            onMouseLeave={() => handleMouseLeave(imageRef2)}
                        />
                    </div>
                    <div className="bottom-right">
                        <h1>Try Our Mobile App!</h1>
                        <a href="/"><button>Let me see!</button></a>
                    </div>
                </div>
                <div className="about-section">
                    <div className="about-left">
                        <h1>ABOUT US</h1>
                        <h2>Welcome to BITEBLISS – Where Every Bite is Pure Bliss!</h2>
                        <p>At BITEBLISS, we believe that every burger should be an experience, not just a meal. Our handcrafted burgers are made with the freshest ingredients, sizzling to perfection on the grill, and packed with flavors that will leave you craving more. Whether you're a classic cheeseburger lover or an adventurous foodie, we've got something that will tickle your taste buds. Come on in and discover your new favorite burger – because at BITEBLISS, bliss is just a bite away!</p>
                    </div>
                    <div className="about-right">
                        <img src={gif} alt="" className='gif' />
                    </div>
                </div>
                <div className="media-section">
                    <div className="media-left">
                        <img src={media} alt="" />
                    </div>
                    <div className="media-right">
                        <h1>Our Social Medias</h1>
                        <h2>The BITEBLISS restaurant chain is just developing, we are still working on the delivery function and website optimization. You can follow the development of the brand in our social networks.</h2>
                        <div className="icon-section">
                            <p>Instagram</p>
                            <a href="https://github.com/FlyBuddyErich" target="_blank"><img src={instagram} alt="" /></a>
                            <p>X (Ex-Twitter)</p>
                            <a href="https://github.com/FlyBuddyErich" target="_blank"><img src={x} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>© BITEBLISS 2024. All rights reserved.</p>
                <p>This website is a presentation. All photos were taken from open sources and are not used for commercial purposes.</p>
            </div>
            <div className={`scroll-to-top ${showArrow ? 'show' : ''}`} onClick={scrollToTop}>
                <img src={arrowUp} alt="Scroll to top" />
            </div>
        </div>
    );
};

export default Presentation;