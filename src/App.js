import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Order from './components/Order'
import DetailPage from './components/DetailPage'
function App() {
  return (
    <div className="App">
     {/* <Order/> */}
    <DetailPage/>
    </div>
  );
}

export default App;
