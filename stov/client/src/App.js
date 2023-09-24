import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Routes_ from './components/Routes/Routes_';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes_/>
      </Router>
    </div>
  );
}

export default App;
