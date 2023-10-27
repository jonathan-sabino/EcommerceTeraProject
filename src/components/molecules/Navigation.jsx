// import React from 'react';
import './navigation.style.css';

export default function Navigation() {
  return (
    <>
      <nav id="navigation">
        <div className="container">
          <div id="responsive-nav">
            <ul className="main-nav nav navbar-nav">
              <li className="active">
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">PLAYSTATION</a>
              </li>
              <li>
                <a href="#">XBOX</a>
              </li>
              <li>
                <a href="#">NINTENDO</a>
              </li>
              <li>
                <a href="#">RETRÔ</a>
              </li>
              <li>
                <a href="#">ACESSÓRIOS</a>
              </li>
              <li>
                <a href="#">COLECIONÁVEIS</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
