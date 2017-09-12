import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom'
import RecipeSearch from './components/RecipeSearch'
import RestaurantSearch from './components/RestaurantSearch'
import Menu from './components/Menu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1><Link to={`/`}>Butter Grams</Link></h1>
        </div>
        <Route exact path={'/'} component={RestaurantSearch}/>
        <Route path={'/menus/:id'} render={(match) => <Menu venueId={match} />}/>
      </div>
    );
  }
}

export default App;
