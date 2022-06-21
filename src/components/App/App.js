import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import Searchbar from '../Searchbar/Searchbar'
import { render } from '@testing-library/react';



// import logo from './logo.svg';


function App() {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <Searchbar />
        <BusinessList />
    </div>
    )
  };
}

export default App;
