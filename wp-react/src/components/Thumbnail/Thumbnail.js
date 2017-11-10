import React, { Component } from 'react';
import './style.css';

class Thumbnail extends Component {
    constructor() {
        super();
        this.state = {
            hovered: false
        }

        this.onHoverOver = this.onHoverOver.bind(this);
        this.onHoverOut = this.onHoverOut.bind(this);
    }

    onHoverOver() {
        console.log(this);
        this.setState({ hovered: true })
    }

    onHoverOut() {
        console.log(this);
        this.setState({ hovered: false })
    }

    render() {
        const { img, title, subhd } = this.props
        
        const bg = {
            background: `url(${img})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }

        const isHovered = this.state.hovered

        return (
            <div className={isHovered ? "thumb__container hovered" : "thumb__container"} style={bg} onMouseEnter={this.onHoverOver} onMouseLeave={this.onHoverOut} onClick={this.onHoverOver} >
                <div className={isHovered ? "thumb__titles hovered" : "thumb__titles"}>
                    <h2 className="thumb__h2">{title}</h2>
                    <h3 className="thumb__h3">{subhd}</h3>
                </div>
                <a href="" className={isHovered ? "thumb__link hovered" : "thumb__link"}>Learn More</a>
            </div>
        );
    }
}

export default Thumbnail;