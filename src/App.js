import React, { Component } from 'react';
import './App.css'; 
import {Login} from "./components/Login";
import NavigationDrawer from "./components/NavigationDrawer";

class App extends Component {
    constructor(props) {
        super(props);
        localStorage.setItem('username','andy');
        localStorage.setItem('password','12345');
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {localStorage.getItem('page') === 'home' ?
                        <NavigationDrawer/> :
                        <Login/>
                    }
                </header>
            </div>
            
        );
    }
}

export default App;
