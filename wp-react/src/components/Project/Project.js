// import React from 'react';
// import './style.css';

// const Project = ({project, onClose}) => {
//     const bg = {
//         backgroundImage: `url(${project.acf.gallery.url})`
//     }
    
//     const close = () => {
//         onClose("")
//     }

//     const stopPropagation = (e) => {
//         e.stopPropagation()
//     }

//     return (
//         <div className="proj__bg" onClick={close}>
//             <div className="proj__container" onClick={stopPropagation}>    
//                 <span className="proj__close" onClick={close}>X</span>
//                 <div className="proj__img" style={bg}></div>                            
//                 <h2 className="proj__title">{project.acf.page_title}</h2>
//                 <h3 className="proj__subhd">{project.acf.page_subheading}</h3>
//                 <p className="proj__desc">{project.acf.page_description}</p>
//                 <a href={project.acf.url} className="proj__link"><button className="proj__btn">View Website</button></a>
//             </div>
//         </div>
//     )
// }

// export default Project;

import React, { Component } from 'react';
import './style.css';

class Project extends Component {
    constructor() {
        super()

        this.close = this.close.bind(this)
        this.stopPropagation = this.stopPropagation.bind(this)
        // this.addFade = this.addFade.bind(this)
    }

    close() {
        this.props.onClose("")
    }

    stopPropagation(e) {
        e.stopPropagation()
    }

    componentDidMount() {
        console.log('project mounted');
    }

    render() {
        const {project} = this.props

        const bg = {
            backgroundImage: `url(${project.acf.gallery.url})`
        }
        return (
            <div className="proj__bg" onClick={this.close}>
                <div className="proj__container" onClick={this.stopPropagation}>    
                    <span className="proj__close" onClick={this.close}>X</span>
                    <div className="proj__img" style={bg}></div>                            
                    <h2 className="proj__title">{project.acf.page_title}</h2>
                    <h3 className="proj__subhd">{project.acf.page_subheading}</h3>
                    <p className="proj__desc">{project.acf.page_description}</p>
                    <a href={project.acf.url} className="proj__link"><button className="proj__btn">View Website</button></a>
                </div>
            </div>
        );
    }
}

export default Project;