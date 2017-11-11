import React from 'react';
import './style.css';

const Project = ({project}) => {
    const bg = {
        backgroundImage: `url(${project.acf.gallery.url})`
    }
    return (
        <div className="proj__bg">
            <div className="proj__container">    
                <span className="proj__close">X</span>
                <div className="proj__img" style={bg}>
                    {/* <img src={project.acf.gallery.url} alt={project.acf.gallery.alt} className="proj_img"/> */}
                </div>                            
                <h2 className="proj__title">{project.acf.page_title}</h2>
                <h3 className="proj__subhd">{project.acf.page_subheading}</h3>
                <p className="proj__desc">{project.acf.page_description}</p>
                <a href={project.acf.url} className="proj__link"><button className="proj__btn">View Website</button></a>
            </div>
        </div>
    )
}

export default Project;
