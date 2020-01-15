import React from 'react';

import './style.css';

function DevItem(props) {
    const { dev } = props;

    return (
        <li className="dev-item">
            <header>
            <img src={dev.avatar_url} alt={dev.name} /> 
            <div className="user-info">
                <strong>{dev.name || dev.github_username}</strong>
                <span>{dev.techs.join(', ')}</span>
            </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no github</a>
        </li>
    );
}

export default DevItem;