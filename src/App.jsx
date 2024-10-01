// src/App.jsx
import About from './About';
import React from 'react';
import Contact from './Contact';
import Header from './Header';


function App() {
  return (
    <>
    <div>   
      <Header/>
      <About/>
      <br></br>
      <Contact/>
      {/* <About/> 
      <Contact/>
      <h1>Hello World!</h1>
      <p>Test</p> */}
  
    </div>

    </>
    
  );
}
export default App
