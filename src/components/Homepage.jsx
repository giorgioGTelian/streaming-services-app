// HomePage.js
import React from 'react';
import JumbotronComponent from './JumbotronComponent';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

function HomePage() {
  const navigate = useNavigate(); // useNavigate hook

  const navigateToService = (path) => {
    navigate(path); // Use navigate function
  };

  return (
    <div className="home-page">
      <JumbotronComponent title="Twitch" description="twich fornisce solo la piattaforma straming - si appoggia ad altre piattaforme per l'effettiva registrazione - la loro applicazione twich studio è installata localmente nel pc - quindi per creare la registrazione va utilizzato un'altra piattaforma" 
      imageCard="twitch.png" onClick={() => navigateToService('/twitch')} />
      <JumbotronComponent title="Streamyard" description="" onClick={() => navigateToService('/streamyard')} />
      <JumbotronComponent title="YouTube" description="" onClick={() => navigateToService('/youtube')} />
      <JumbotronComponent title="Dacast" description="" onClick={() => navigateToService('/dacast')} />
    </div>
  );
}

export default HomePage;
