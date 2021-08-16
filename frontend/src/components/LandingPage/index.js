import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import landingPageImage0 from '../../assets/landingPageImage0.jpg'
import landingPageImage1 from '../../assets/landingPageImage1.jpg'
import landingPageImage2 from '../../assets/landingPageImage2.jpg'
import landingPageImage3 from '../../assets/landingPageImage3.jpg'
import landingPageImage4 from '../../assets/landingPageImage4.jpg'
import './LandingPage.css';

export const LandingPage = () => {

    const [backgroundImage, setBackgroundImage] = useState(landingPageImage0);
    const [changeBackgroundImage, setChangeBackgroundImage] = useState(0);

    useEffect(() => {
        const backgroundImages = [
            landingPageImage1,
            landingPageImage2,
            landingPageImage3,
            landingPageImage4
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

            <div className='landing-page-header'>Share your adventures
                <div className='landing-page-body'>Join the Slickr community, where memories are stored</div>
                {/* <div>
                    <Link className="start-adventure-button" to="/signup">Start adventure</Link>
                </div> */}
                {/* <a className="start-adventure-button" to="/signup">Start adventure</a> */}
                <Link className="start-adventure-button" to="/signup"></Link>
                 <button className='start-adventure'>
                    Start adventure
                </button> 
            </div>

            <div>
                <img className="landing-img" src={backgroundImage} alt="" />
                <div className="made-by-link">Created By: </div>
                <a href="https://github.com/jurrel/slickr">Gerryl Esperacion</a>
            </div>
  
        </>
    )
}



