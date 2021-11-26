import React from 'react';
import about from '../images/about3.JPG';

const ImageSection = () => {
    return (
        <div className="image-section">
            <div className="img">
                <img src={about} alt="" />
            </div>

            <div className="about-info">
                <h4>I am<span style={{ color: 'orange' }}> Arunabh Newar</span></h4>
                <p className="about-text">
                    I love creating something new. I’m the happiest when I’m writing or creating something new that never exist. Web development is my passion now. That's why I learned as much as possible to build myself as a web developer. Still learning and I will continue my learning process.
                </p>

                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        {/* <p>Age</p> */}
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Country</p>
                    </div>
                    <div className="right-section">
                        <p>: Arunabh Newar</p>
                        {/* <p>: </p> */}
                        <p>: Bangladeshi</p>
                        <p>: Bangla, English, Hindi</p>
                        <p>: Majher basti, Tabalchari, Rangamati</p>
                        <p>: Bangladesh</p>
                    </div>
                </div>

                <button className="btn">Download Cv</button>
            </div>
        </div>
    );
};

export default ImageSection;