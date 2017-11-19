import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
import './App.css';
import Header from './containers/Header/Header';
import Home from './containers/Home';
import About from './containers/About';
// import Project from './containers/Project';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header />
                        
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
