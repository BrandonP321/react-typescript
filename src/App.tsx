import React from 'react';
import { Home } from './pages/Home'
import { PartyList } from './pages/PartyList'
import './App.css';
import { UserSearch } from './pages/UserSearch';

function App() {
  return (
    <div className="App">
      {/* <Home 
        color='red'
        onClick={() => console.log('clicked')}></Home> */}
      {/* <PartyList /> */}
      <UserSearch />
    </div>
  );
}

export default App;
