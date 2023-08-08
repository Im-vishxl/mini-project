import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './components/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import PlayerLoginPage from './pages/Player';
import AdminLoginPage from './pages/AdminLogin';
import TurfBookingPage from './pages/TurfBookingPage';
import RegisterPlayer from './pages/RegisterPlayer';
import findgames from './pages/findgames';

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
          <Route path="/login/player" exact Component={PlayerLoginPage} />
          <Route path="/login/manager" exact Component={AdminLoginPage} />
          <Route path="/turf/:id" exact Component={TurfBookingPage} />
          <Route path="/player/register" exact Component={RegisterPlayer} />
          <Route path="/findgames" exact Component={findgames} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
