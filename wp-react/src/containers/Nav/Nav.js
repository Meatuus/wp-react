import React, { Component } from 'react';
// import {
//     BrowserRouter,
//     Route,
//     Link
// } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
import './style.css';
import Logo from '../../components/Logo/Logo';
// import About from './containers/About';
// import Project from './containers/Project';

class Nav extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mounted: false,
            typedName: this.props.name
        }

        // this.setDelay = this.setDelay.bind(this)
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log(this.props.name);
    // }

    // componentDidMount() {
    //     const {name} = this.props
    //     console.log(name);
    //     // console.log(this.state.typedName);
    //     // this.setState({typedName: name})
    //     // console.log(this.state.typedName);
    //     // // this
    //     // console.log(name.length);
    //     // const firstChar = name.charAt(0)
        
    //     // this.setState({
    //     //     typedName: name.length
    //     // })
    //     const {typedName} = this.state
    //     console.log(typedName);
    //     // console.log(firstChar);

    //     // console.log(typedName.concat("string"));
    //     let timer = 100
    //     let something = this.state.typedName
    //     for (var i = 1; i < name.length; i++) {
    //         // var element = array[i];
    //         // console.log(object);
    //         // console.log(name.charAt(i));
    //         // setTimeout((i) => {console.log(name.charAt(i))}, timer)
    //         // setTimeout(function () { console.log(i); }, timer);
    //         // setDelay(i, time) {
    //         //     setTimeout(function () { console.log(i); }, time);
    //         // }
    //         // let concat = something.concat(name.charAt(i))
    //         something = something.concat(name.charAt(i))
    //         console.log(something);
    //         // console.log(typing);
    //         // this.setState({
    //         //     typedName: concat
    //         // })
    //         // console.log(typedName);
    //         // console.log(typedName.concat(typedName, name.charAt(i)));
    //         // console.log(name.charAt(i));
    //         // console.log(typedName);
    //         // typedName.concat(name.charAt(i))
    //         // let setDelay = (item, timer) => (

    //         //     setTimeout(function () { console.log(`${item} - ${timer}`); }, timer)
    //         //     // setTimeout(function () { this.setState({ typedName: item }); }.bind(this), timer)
    //         // )
            
    //         // setDelay(concat, timer)
    //         // timer += 1000
    //     }
    //     // setTimeout(function () { this.setState({ mounted: true }) }.bind(this), 1000);
    //     // console.log('mounted');
    //     // setTimeout(function () { console.log('mount delay'); }, 100);
    //     // this.setState({
    //     //     name: name.charAt(0)
    //     // })

    //     // setDelay(i, time) {
    //     //     setTimeout(function () { console.log(i); }, time);
    //     // }
    // }
    

    render() {
        const {mounted, typedName} = this.state
        // const name = "Testing Name"

        // let typed = name.charAt(0)
        // let newTitle = name.charAt(0)
        // // let renderedTitle = <Logo title={name.charAt(0)} />
        // let setDelay = (item, timer) => (
        //     // setTimeout(<Logo title={item} />, timer)
        //     setTimeout(function () { 
        //         // renderedTitle = <Logo title={item} />; 
        //         newTitle = item;
        //         console.log(item);
        //     }, timer)
        //     // setTimeout(function () { console.log(`${newTitle}`); }, timer)
        //     // setTimeout(function () { this.setState({ typedName: item }); }.bind(this), timer)
        // )

        // let delay = 100
        // for (let i = 1; i < name.length; i++) {


        //     typed = typed.concat(name.charAt(i))
        //     //    let test = typed.concat(title.charAt(i))
        //     //    let setDelay = (item, timer) => (
        //     //     console.log('test')
        //     //         // setTimeout(function () { console.log(`${item} - ${timer}`); }, timer)
        //     //         // setTimeout(function () { this.setState({ typedName: item }); }.bind(this), timer)
        //     //     )
        //     // console.log(typed);
        //     setDelay(typed, delay)
        //     delay += 1000
        // }
        return (
            <nav>
                <h2 className="nav-title">&#123;&nbsp; <span className={mounted ? "nav-span mounted" : "nav-span"}>{typedName}</span> &nbsp;&#125;</h2>
                
                <Logo title="Testing Name. " />

            </nav>

        );
    }
}

export default Nav;