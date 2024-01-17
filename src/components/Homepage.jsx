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
      <JumbotronComponent title="Twitch" onClick={() => navigateToService('/twitch')} />
      <JumbotronComponent title="Streamyard" onClick={() => navigateToService('/streamyard')} />
      <JumbotronComponent title="YouTube" onClick={() => navigateToService('/youtube')} />
      <JumbotronComponent title="Dacast" onClick={() => navigateToService('/dacast')} />
    </div>
  );
}

export default HomePage;
