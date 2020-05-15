import React from 'react';
import Routes from './routes';
import './global.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

function App() {

  return (
    <div>
      <Routes/>
    </div>
  );
}

export default App;
