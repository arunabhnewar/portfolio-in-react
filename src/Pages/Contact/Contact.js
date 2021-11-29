import React from 'react';
import ContactItem from '../../Components/ContactItem';
import phone from '../../images/phone.svg';
import email from '../../images/emailme.svg';
import location from '../../images/location.svg';
import Title from '../../Components/Title';
import Fade from 'react-reveal/Fade';

const Contact = () => {
    return (
        <div>
            <div className="contact-container">
                <Title title={'Contact'} span={'contact'} />
            </div>

            <div className="ContactPage">
                <Fade left>
                    <div className="map-section">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.612256680957!2d92.18530261484378!3d22.640574736178078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3752b4e3325e9f33%3A0xdd58856ec9c91795!2sMajher%20Bosti!5e1!3m2!1sen!2sbd!4v1637595338407!5m2!1sen!2sbd" width="600" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                    </div>
                </Fade>

                <Fade right>
                    <div className="contact-section">
                        <ContactItem icon={phone} text1={'+880 1784578477'} text2={'+880 1308084861'} title={'Phone'} />
                        <ContactItem icon={email} text1={'arunabh.newar.007@gmail.com'} text2={'newardevil@gmail.com'} title={'Email'} />
                        <ContactItem icon={location} text1={'Majherbasti, Tabalchari, Rangamati'} text2={'Bangladesh'} title={'Address'} />
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Contact;