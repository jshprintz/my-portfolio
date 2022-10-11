import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import "./HomePage.css"

function HomePage() {

    return (
        <>
        <NavBar />
        <p className='intro-text first-animation'>Hi, I'm Jason!</p>
        <div className='intro-text-container'>
        <p className='intro-text second-animation'>I'm a Full Stack Web Developer living in Las Vegas, NV.</p>
        </div>
        <br />
        <div className='intro-text-container'>
        <p className='intro-text third-animation'>Check out my skills:</p>
        </div>
        </>
    )
}

export default HomePage