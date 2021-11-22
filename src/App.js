import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar/Navbar';
import About from './Pages/About/About';
import Portfolio from './Pages/Portfolio/Portfolio';
import Blogs from './Pages/Blogs/Blogs';
import Contact from './Pages/Contact/Contact';



function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/blogs">
              <Blogs />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
