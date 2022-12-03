import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {Routes, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Login from './pages/Login';
import Register from './pages/Register';
import Donate from './pages/Donate';


function App() {
  return (
    <div className="App">

      <Routes>
         <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/donate' element={<Donate />}/>
        
      </Routes>
    </div>
  );
}

export default App;
