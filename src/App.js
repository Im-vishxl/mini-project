import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './components/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import LoginPage from './pages/Player';
import findgames from './pages/findgames';
import Venueselect from './pages/Venueselect';


import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


// const pathname = TurfItem.name;
// console.log(pathname)



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
          <Route path="/booknow/venue" exact Component={Venueselect} />
          <Route path="/findgames" exact Component={findgames} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
