import React from "react";
import './AboutSkillsStyles.css'
import { FaHtml5, FaCss3, FaJava, FaReact, FaWordpress } from "react-icons/fa";


const skillsData = [
    {
        title: 'Html / Html5 & CSS}',
        percentage: 90,
        icon: FaHtml5 + FaCss3,
    },
    {
        title: 'Javascript / JQuery',
        percentage: 85,
        icon: FaJava ,
    },
    {
        title: 'ReactJS',
        percentage: 88,
        icon: FaReact ,
    },
    {
        title: 'WordPress',
        percentage: '95',
        icon: FaWordpress ,
    }
];

const SkillBar = ( {title, percentage}) => {
    const innerBarStyle = {
        width: `${percentage}%`,
    };
    return ( 
        <div className="skill" >
            <h3 className="skill__type">{title}</h3>
            <div className="skill__outer-bar" >
                <div className="skill__inner-bar" style={innerBarStyle} ></div>
            </div>
            <div className="skill__tooltip" >{percentage}%</div>
        </div>
    );
};


const SkillsChart = ({skills}) => {
    return (
        <div className="center-skills">
            <section className="skills-chart">
                {skills.map((skill, index) => (
                <SkillBar key={index} title={skill.title} percentage={skill.percentage}/>
            ))}
            </section> 
        </div>
    );
};




const App = () => {
    return (
        <div className="about__skills-container">
            <h2 >Skills</h2>
            <SkillsChart skills={skillsData} />
        </div>
    );
};

export default App;