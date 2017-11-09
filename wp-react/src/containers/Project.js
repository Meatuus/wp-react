import React, { Component } from 'react';

class Project extends Component {
    constructor() {
        super();

        this.state = {
            wpData: []
        }
    }

    componentDidMount() {
        const dataUrl = "http://local.site.com/wp-json/wp/v2/pages/"

        fetch(dataUrl)
            .then(res => res.json())
            .then((json) => {
                this.setState({ wpData: json })
            })
    }

    render() {
        const hero = this.state.wpData.map(page => {
            return <div key={page.id}>
                <div>
                    <img src={page.acf.hero_image.url} alt={page.acf.hero_image.title} />
                </div>
                <h1>{page.acf.hero_title}</h1>
                <p>{page.acf.hero_description}</p>
            </div>
        })

        return (
            <div id="projects">
                <h1>Hello World</h1>
                <p>Projects page</p>
                {hero}
            </div>
        );
    }
}

export default Project;