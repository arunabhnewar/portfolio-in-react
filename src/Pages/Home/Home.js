import { faFacebook, faGithub, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef } from 'react';
import { init } from "ityped";

const Home = () => {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Front End Web Developer", "React Developer", "Screenplay Writer"],
        })
    }, [])

    return (
        <div className="home-section">
            <header className="hero">
                <h1 className="hero-title">
                    Hi, I am
                    <span> Arunabh Newar</span>
                </h1>
                <p className="hero-info">
                    <span ref={textRef}></span>
                </p>
                <div className="icons">
                    <a href="https://www.facebook.com/arunabh.newar/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-holder" >
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </a>

                    <a href="https://www.linkedin.com/in/arunabh-newar-bb7126215/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-holder" >
                        <FontAwesomeIcon icon={faLinkedin} className="icon li" />
                    </a>

                    <a href="https://github.com/ArunabhNewar"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>

                    <a href="https://twitter.com/arunabh_leo"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-holder">
                        <FontAwesomeIcon icon={faTwitterSquare} className="icon tt" />
                    </a>
                </div>
            </header>
        </div>
    );
};

export default Home;