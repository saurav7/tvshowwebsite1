import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar';
import TvShows from './pages/TvShows';

function App() {
  return (
    <div className="App">
        <Router>
          <NavBar />
          <Route exact path = "/" component = {Home}/>
          <Route path = "/about" component = {About}/>
          <Route exact path="/tvshows" component={TvShows} />
        </Router>
    </div>
  );
}

export default App;
