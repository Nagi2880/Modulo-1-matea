import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter,
  Routes,
  Route} from "react-router-dom";
import Home from './finished/Home';
import Login from './finished/Login';
import Register from './finished/Register';
import Mobilereg from './Mobile/Mobilereg';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/test" element={<Mobilereg />} />
      </Routes> 
    </BrowserRouter>  
  );
}

export default App;
