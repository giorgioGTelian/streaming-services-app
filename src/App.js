import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage';
import TwitchPage from './components/TwitchPage'; // Update the import path as per your directory structure
import StreamyardPage from './components/StreamyardPage'; // Update the import path
import YoutubePage from './components/YoutubePage'; // Update the import path
import DacastPage from './components/DacastPage'; // Update the import path

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Router>
         <Routes>
           <Route path="/" exact component={HomePage} />
           <Route path="/twitch" component={TwitchPage} />
           <Route path="/streamyard" component={StreamyardPage} />
           <Route path="/youtube" component={YoutubePage} />
           <Route path="/dacast" component={DacastPage} />
         </Routes>
       </Router>
    </div>
  );
}

export default App;
