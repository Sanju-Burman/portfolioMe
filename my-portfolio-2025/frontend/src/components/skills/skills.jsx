import './skills.css';
import React from 'react';

const skills = [
    { name: 'JAVA', level: '100%' },
    { name: 'HTML', level: '80%' },
    { name: 'JavaScript', level: '65%' },
    { name: 'Photoshop', level: '55%' }
];

const SkillBar = ({ skill }) => (
    <div className="skill-bar">
        <span className="skill-name">{skill.name}</span>
        <div className="skill-progress">
            <div className="skill-progress-level" style={{ width: skill.level }}></div>
        </div>
        <span className="skill-level">{skill.level}</span>
    </div>
);

const Skills = () => (
    <div className="skills">
        <span className="skill-heading">Skills</span>
        {skills.map((skill, index) => (
            <SkillBar key={index} skill={skill} />
        ))}
    </div>
);

export default Skills;
