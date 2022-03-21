import React from 'react';
import './Header.css';

export default({black}) => {
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href='/'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/150px-Netflix_2015_logo.svg.png" alt=""/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://pbs.twimg.com/profile_images/1165907170178695168/JLkRF8ZY_200x200.png" alt="Usuário"/>
                </a>
            </div>
        </header>
    )
}