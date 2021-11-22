import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar/Navbar';
import About from './Pages/About/About';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';



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
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
