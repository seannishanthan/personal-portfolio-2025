import React from 'react'
import Typewriter from 'typewriter-effect'

function Intro(){
    return (
        <>
        <section className="intro-container" id="home">
                <div className="intro-sub-1">

                    <h2>Hi, I'm 
                        <span className="typing-text">
                            <Typewriter options={{strings: ["Sean Nishanthan", "A Software Developer", "An Aspiring Engineer", "A Problem Solver"], autoStart: true, loop: true,}}/>
                        </span>
                    </h2>
                    
                    <p>Second Year Computer Engineering Student at the University of Toronto</p>
                </div>
                <div className="intro-sub-2">
                    <img src="/pfp.jpg" alt="My profile picture" className="pfp"/>
                </div>

        </section>

        <div className='link-container'>
                <a className="github-icon" href="https://github.com/seannishanthan" target="_blank"><i className="fa-brands fa-github fa-3x"></i></a>
                <a className="linkedin-icon" href="https://www.linkedin.com/in/sean-nishanthan/" target="_blank"><i className="fa-brands fa-linkedin fa-3x"></i></a>
        </div>
    </>

    )
}

export default Intro

