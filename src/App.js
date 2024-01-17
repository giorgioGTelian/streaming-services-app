import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage';
import TwitchPage from './components/TwitchPage'; // Update the import path as per your directory structure
import StreamyardPage from './components/StreamyardPage'; // Update the import path
import YoutubePage from './components/YoutubePage'; // Update the import path
import DacastPage from './components/DacastPage'; // Update the import path

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <Navbar className="bg-body-tertiary justify-content-between navbar.header"></Navbar>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/twitch" element={<TwitchPage />} />
        <Route path="/streamyard" element={<StreamyardPage />} />
        <Route path="/youtube" element={<YoutubePage />} />
        <Route path="/dacast" element={<DacastPage />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
