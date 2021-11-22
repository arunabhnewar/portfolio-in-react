import React from 'react';
import ImageSection from '../../Components/ImageSection';
import Title from '../../Components/Title';
import SkillSection from '../../Components/SkillSection';


const About = () => {
    return (
        <div className="about-section">
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Title title={'My Skills'} span={'My Skills'} />

            <div className="skillsContainer">
                <SkillSection skill={'Javascript'} progress={'75%'} width={'75%'} />
                <SkillSection skill={'Typescript'} progress={'15%'} width={'15%'} />
                <SkillSection skill={'React Js'} progress={'70%'} width={'70%'} />
                <SkillSection skill={'Express Js'} progress={'70%'} width={'70%'} />
                <SkillSection skill={'Web Design'} progress={'85%'} width={'85%'} />
                <SkillSection skill={'Next Js'} progress={'15%'} width={'15%'} />
            </div>

        </div >
    );
};

export default About;