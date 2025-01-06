import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';


function App() {


  return (
    <div className="App" >
      <ScrollToTop />
      <Header />
      <Outlet />
    </div>
  ); 
}

export default App;
