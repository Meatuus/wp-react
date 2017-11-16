import React, { Component } from 'react';
import './style.css';

class Thumbnail extends Component {
    constructor() {
        super();
        this.state = {
            hovered: false,
            mounted: true
        }

        this.onHoverOver = this.onHoverOver.bind(this);
        this.onHoverOut = this.onHoverOut.bind(this);
        this.onLinkClick = this.onLinkClick.bind(this);
    }

    onHoverOver() {
        this.setState({ hovered: true })
    }

    onHoverOut() {
        this.setState({ hovered: false })
    }

    onLinkClick(e) {
        e.preventDefault()
        this.props.onLinkClick(this.props.id)
    }

    render() {
        const { img, title, subhd, index } = this.props
        
        const bg = {
            backgroundImage: `url(${img})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            transform: `translate(${index % 2 === 0 ? "0px" : "100%"}, ${Math.floor(index / 2) * 280}px)`
        }

        const {hovered, mounted} = this.state

        const classList = [`thumb__container index__${index}`]
        if (hovered && !mounted) {
           classList.push("hovered hide") 
        } else if (hovered) {
            classList.push("hovered")
        } else if (!mounted) {
            classList.push("hide")
        }

        return (
            <div className={classList.join(' ')} style={bg} onMouseEnter={this.onHoverOver} onMouseOver={this.onHoverOver} onMouseLeave={this.onHoverOut} onClick={this.onHoverOver} >
                <div className={hovered ? "thumb__titles hovered" : "thumb__titles"}>
                    <h2 className="thumb__h2">{title}</h2>
                    <h3 className="thumb__h3">{subhd}</h3>
                </div>
                <a href="" className={hovered ? "thumb__link hovered" : "thumb__link"} onClick={this.onLinkClick}>Learn&nbsp;More</a>
            </div>
        );
    }
}

export default Thumbnail;