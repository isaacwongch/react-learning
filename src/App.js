import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Content from './components/Content';
import NavBar from './components/NavBar';
import Post from './components/Post';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <NavBar/>
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route path='/about' component={About}></Route>
              <Route path='/content' component={Content}></Route>
              <Route path='/:post_id' component={Post}></Route>
            </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
