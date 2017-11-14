import React, { Component } from 'react';
import Tag from '../Tag/Tag';

class FilterTags extends Component {
    constructor() {
        super();

        this.onTagClick = this.onTagClick.bind(this);
    }

    onTagClick(tag) {
        this.props.onTagClick(tag)
    }

    render() {
        return (
            <ul>
                {/* <li>All</li> */}
                <Tag title="All" id="all" onTagClick={this.onTagClick}/>
                <Tag title="CMS" id={3} onTagClick={this.onTagClick}/>
                <Tag title="Javascript" id={2} onTagClick={this.onTagClick}/>
                <Tag title="Ruby" id={5} onTagClick={this.onTagClick}/>
                <Tag title="Scss" id={4} onTagClick={this.onTagClick}/>
            </ul>
        );
    }
}

export default FilterTags;

// javascript - 2
// cms - 3
// sass - 4
// rails - 5