import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter,
  Routes,
  Route} from "react-router-dom";
import Home from './finished/Home';
import Login from './finished/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes> 
    </BrowserRouter>  
  );
}

export default App;
