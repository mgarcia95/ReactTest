import './App.css';
import React, {Fragment, Component} from 'react';
import Navbar from './component/layout/Navbar';

class App extends React.Component{

  render() {

    return (
      <nav className="navbar bg-primary">
        <Navbar title='Github Finder' icon='fab fa-github'/> 
      </nav>
    );
  }
}

export default App;
