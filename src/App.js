import React, { Component } from 'react';
import './App.css'; 
import {Login} from "./components/Login";
import NavigationDrawer from "./components/NavigationDrawer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewTask from './components/NewTask';

class App extends Component {
    constructor(props) {
        super(props);
        localStorage.setItem('username','andy');
        localStorage.setItem('password','12345');
    }

    render() {
        return (
           
          <Router>
          <div className="App">
            <Route path="/" exact component={Login} />
            <Route path="/Drawer" exact component={NavigationDrawer} />  
            <Route path="/NewTask" exact component={NewTask} />  
          </div>
        </Router>
        );
    }
}

export default App;
