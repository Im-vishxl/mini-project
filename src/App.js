import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './components/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import LoginPage from './pages/Player';


import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';





function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/booknow" exact Component={Menu} />
          <Route path="/about" exact Component={About} />
          <Route path="/contact" exact Component={Contact} />
          <Route path="/login" exact Component={Login} />
          <Route path="/login/player" exact Component={LoginPage} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
