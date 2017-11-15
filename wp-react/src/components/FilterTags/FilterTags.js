import React, { Component } from 'react';
import './style.css';
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
        const {selectedTag} = this.props

        return (
            <ul className="filter-list">
                <Tag title="All" id="all" filterTag={selectedTag} onTagClick={this.onTagClick}/>
                <Tag title="CMS" id={3} filterTag={selectedTag} onTagClick={this.onTagClick}/>
                <Tag title="Javascript" id={2} filterTag={selectedTag} onTagClick={this.onTagClick}/>
                <Tag title="Ruby" id={5} filterTag={selectedTag} onTagClick={this.onTagClick}/>
            </ul>
        );
    }
}

export default FilterTags;

// javascript - 2
// cms - 3
// sass - 4
// rails - 5