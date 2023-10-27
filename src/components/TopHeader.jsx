// import React from 'react';
import './topheader.style.css';
import TopHeaderInfo from './atoms/TopHeaderInfo';

export default function TopHeader() {
  return (
    <>
      <div id="top-header">
        <div className="container">
          <ul className="header-links pull-left">
            <li>
              <a href="#">
                <TopHeaderInfo
                  iconInfo="fa fa-phone"
                  textInfo="(19) 99999-9999"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <TopHeaderInfo
                  iconInfo="fa fa-envelope-o"
                  textInfo="email@email.com"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <TopHeaderInfo
                  iconInfo="fa fa-map-marker"
                  textInfo="Rua dos Bobos, 123 -
                  Technópolis"
                />
              </a>
            </li>
          </ul>
          <ul className="header-links pull-right">
            <li>
              <a href="#">
                <TopHeaderInfo iconInfo="fa fa-user-o" textInfo="Minha Conta" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
