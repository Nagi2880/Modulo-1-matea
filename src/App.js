import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter,
  Routes,
  Route} from "react-router-dom";
import Home from './finished/Home';
import Login from './finished/Login';
import Register from './finished/Register';
import Mobilelogin from './Mobile/Mobilelogin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/test" element={<Mobilelogin />} />
      </Routes> 
    </BrowserRouter>  
  );
}

export default App;
