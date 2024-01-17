// JumbotronComponent.js
import React from 'react';

function JumbotronComponent({ title, onClick }) {
    return (
        <div className="jumbotron" onClick={onClick}>
        <h1>{title}</h1>
        </div>
    );
}

export default JumbotronComponent;
