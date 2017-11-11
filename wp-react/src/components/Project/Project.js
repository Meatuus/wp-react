import React, { Component } from 'react';
import './style.css';

const Project = ({project}) => {
    return (
        <div>
            <div>                                
                <h2 className="project acf">{project.acf.page_title}</h2>
                <h3 className="proj_subhd">{project.acf.page_subheading}</h3>
                <p className="proj_desc">{project.acf.page_description}</p>
                <a href={project.acf.url} className="proj_link">View Website</a>
            </div>
        </div>
    )
}

export default Project;
