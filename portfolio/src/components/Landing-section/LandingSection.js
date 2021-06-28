import React from 'react'
import CompPhoto from '../../assets/Test.svg';
import Typical from 'react-typical'
import './LandingSection.css';
import logo from '../../assets/logo.svg';

function LandingSection() {
    return (
        <div className='landing-section'>
            <img className='nav-logo' src={logo} alt='logo' />
            <img className='working-img' src={CompPhoto} alt= 'computer'/>
            <div className='head-text'>
                <h1>
                    Hey Stranger! Welcome to my Portfolio
                </h1>
                <h3>Myself Sayantan Kapat
                    <Typical
                        steps={[
                            'A Web Developer', 1500, 
                            'A MERN Developer', 1500, 
                            'A ML Engineer', 1500, 
                            'A Problem solver', 1500]}
                        loop={Infinity}
                        wrapper="p"
                    />
                </h3>        
            </div>
        </div>
        
    )
}

export default LandingSection;
