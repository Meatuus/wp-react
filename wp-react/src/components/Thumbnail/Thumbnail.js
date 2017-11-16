import React, { PureComponent } from 'react';
import './style.css';

class Thumbnail extends PureComponent {
    constructor() {
        super();
        this.state = {
            hovered: false
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
        const { img, title, subhd, selectedTag } = this.props
        const { hovered } = this.state

        const bg = {
            backgroundImage: `url(${img})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }        

        const containerClassList = [`thumb__container`]
        const titlesClassList = ['thumb__titles']
        const linkClassList = ['thumb__link']

        if (!selectedTag) {
            containerClassList.push("hidden")
            titlesClassList.push("hidden")
            linkClassList.push("hidden")
        } 

        if (hovered && selectedTag) {
            containerClassList.push("hovered")
            titlesClassList.push("hovered")
            linkClassList.push("hovered")
        }

        return (
            <div className={containerClassList.join(' ')} style={bg} onMouseEnter={this.onHoverOver} onMouseOver={this.onHoverOver} onMouseLeave={this.onHoverOut} onClick={this.onHoverOver} >
                <div className={titlesClassList.join(' ')}>
                    <h2 className="thumb__h2">{title}</h2>
                    <h3 className="thumb__h3">{subhd}</h3>
                </div>
                <a href="" className={linkClassList.join(' ')} onClick={this.onLinkClick}>Learn&nbsp;More</a>
            </div>
        );
    }
}

export default Thumbnail;