import React, { Component } from 'react';
// import {
//     BrowserRouter,
//     Route,
//     Link
// } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
// import './style.css';
// import Logo from '../components/Logo/Logo';
// import About from './containers/About';
// import Project from './containers/Project';

class Logo extends Component {
    constructor() {
        super()

        // this.state = {
        //     mounted: false,
        //     typedName: this.props.name
        // }

        // this.setDelay = this.setDelay.bind(this)
    }



    render() {
        const {title} = this.props

        // let typed = title.charAt(0)
        // let newTitle = title.charAt(0)
        // let setDelay = (item, timer) => (
        //     setTimeout(function () { newTitle = item; }, timer),
        //     setTimeout(function () { console.log(`${newTitle}`); }, timer)
        //     // setTimeout(function () { this.setState({ typedName: item }); }.bind(this), timer)
        // )

        // let delay = 100
        // for (let i = 1; i < title.length; i++) {
            

        //    typed = typed.concat(title.charAt(i))
        // //    let test = typed.concat(title.charAt(i))
        // //    let setDelay = (item, timer) => (
        // //     console.log('test')
        // //         // setTimeout(function () { console.log(`${item} - ${timer}`); }, timer)
        // //         // setTimeout(function () { this.setState({ typedName: item }); }.bind(this), timer)
        // //     )
        //     setDelay(typed, delay)
        //     delay += 1000
        // }
        // let setDelay = (item, timer) => (

        //     //     setTimeout(function () { console.log(`${item} - ${timer}`); }, timer)
        //     //     // setTimeout(function () { this.setState({ typedName: item }); }.bind(this), timer)
        //     // )
        // )

        return (
            <nav>
                <h2 className="nav-title">&#123;&nbsp; <span className="nav-span">{title}</span> &nbsp;&#125;</h2>
                {/* <Logo title={typedName} /> */}
            </nav>

        );
    }
}

export default Logo;