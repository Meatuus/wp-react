import React, { Component } from 'react';

class Tag extends Component {
    constructor() {
        super()

        this.onTagSelect = this.onTagSelect.bind(this)
    }

    onTagSelect() {
        console.log(this.props.title);
        console.log(this);
    }

    render() {
        return (
            <li onClick={this.onTagSelect} >
                {this.props.title}
            </li>
        );
    }
}

export default Tag;