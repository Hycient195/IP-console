import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <Home/> */}
      {/* <Login/> */}
      {/* <Footer/> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Login/>} />
          <Route path='/dashboard' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
