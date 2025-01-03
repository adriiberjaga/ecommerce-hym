import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';


function App() {

const [isDark, setIsDark] = useState(false);

  return (
    <div className="App" data-theme={isDark ? 'dark' : 'light'}>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <Outlet />
    </div>
  ); 
}

export default App;
