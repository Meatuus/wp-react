import React, { Component } from 'react';
import Tag from '../Tag/Tag';

class FilterTags extends Component {
    constructor() {
        super();

        this.onStackClick = this.onStackClick.bind(this);
    }

    onStackClick() {
        console.log(this.value);
    }

    render() {
        return (
            <ul>
                <li>All</li>
                <Tag title="Ruby" />
                <li onClick={this.onStackClick}>Javascript</li>
                <li>CMS</li>
            </ul>
        );
    }
}

export default FilterTags;