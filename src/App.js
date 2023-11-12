import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
        <Router>
          <Route exact path = "/" component = {Home}/>
          <Route path = "/about" component = {About}/>
        </Router>
    </div>
  );
}

export default App;
