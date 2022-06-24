import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login'

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <Home/> */}
      <Login/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
