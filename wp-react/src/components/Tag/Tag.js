import React, { Component } from 'react';

class Tag extends Component {
    constructor() {
        super()

        this.onTagClick = this.onTagClick.bind(this)
    }

    onTagClick() {
        this.props.onTagClick(this.props.id)
    }

    render() {
        return (
            <li onClick={this.onTagClick} >
                {this.props.title}
            </li>
        );
    }
}

export default Tag;

