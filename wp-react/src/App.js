import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './App.css';
import Nav from './containers/Nav/Nav';
import Home from './containers/Home';
import About from './containers/About';
// import Project from './containers/Project';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <header className="App-header">
                        <Nav />
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            {/* <li><Link to="/home/project">Project</Link></li> */}
                            <li><HashLink to="/#projects">Projects</HashLink></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </header>

                    <Route exact path="/" component={Home} />
                    <Route path="/home" component={Home}>
                        {/* <Route path="/home/project" component={Project} /> */}
                    </Route>
                    <Route path="/about" component={About} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
