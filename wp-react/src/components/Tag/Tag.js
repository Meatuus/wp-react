import React, { Component } from 'react';
import './style.css';

class Tag extends Component {
    constructor() {
        super()

        this.onTagClick = this.onTagClick.bind(this)
    }

    onTagClick() {
        this.props.onTagClick(this.props.id)
    }

    render() {
        const {filterTag, id, title} = this.props
        return (
            <li className={filterTag === id ? "filter-item active" : "filter-item"} onClick={this.onTagClick} >
                {title}
            </li>
        );
    }
}

export default Tag;

