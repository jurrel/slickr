import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';

import landingPageImage0 from '../../assets/landingPageImage0.jpg'
import landingPageImage1 from '../../assets/landingPageImage1.jpg'
import landingPageImage2 from '../../assets/landingPageImage2.jpg'
import landingPageImage3 from '../../assets/landingPageImage3.jpg'
import landingPageImage4 from '../../assets/landingPageImage4.jpg'
import landingPageImage5 from '../../assets/landingPageImage5.jpg'
import landingPageImage6 from '../../assets/landingPageImage6.jpg'
import landingPageImage7 from '../../assets/landingPageImage7.jpg'
import landingPageImage8 from '../../assets/landingPageImage8.jpg'
import './LandingPage.css';

export const LandingPage = () => {

    const [backgroundImage, setBackgroundImage] = useState(landingPageImage0);
    const [changeBackgroundImage, setChangeBackgroundImage] = useState(0);

    useEffect(() => {
        const backgroundImages = [
            landingPageImage1,
            landingPageImage2,
            landingPageImage3,
            landingPageImage4,
            landingPageImage5,
            landingPageImage6,
            landingPageImage7,
            landingPageImage8,
        ];
        const changeBackgroundInterval = setTimeout(function () {
            setBackgroundImage(backgroundImages[changeBackgroundImage]);
            if (changeBackgroundImage === backgroundImages.length - 1) setChangeBackgroundImage(0);
            else {
                setChangeBackgroundImage(changeBackgroundImage + 1);
            }
        }, 5000);

        return () => {
            clearTimeout(changeBackgroundInterval);
        };
    }, [changeBackgroundImage])


    return (
        <>

            <div className='landing-page-header'>Share your adventures {"\n"}
                <div >Join the Slickr community, where memories are stored</div>
                <NavLink className="start-adventure-button" to="/signup">
                    <button className='start-adventure'>
                        Start adventure
                    </button>
                </NavLink>
            </div>
            <div>
                <img className="landing-img" src={backgroundImage} alt="" />
                <div className="bottom-bar-landing">
                    <a className='git-hub-link' href="https://github.com/jurrel/slickr">
                        <i className="fa fa-github"></i>
                    </a>
                </div>
            </div>
        </>
    )
}



