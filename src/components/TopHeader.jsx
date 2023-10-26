import React from 'react';

export default function TopHeader() {
  return (
    <>
      <div id="top-header">
        <div className="container">
          <ul className="header-links pull-left">
            <li>
              <a href="#">
                <i className="fa fa-phone"></i> (11) 99999-9999
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-envelope-o"></i> email@email.com
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-map-marker"></i> Rua dos Bobos, 123 -
                Technópolis
              </a>
            </li>
          </ul>
          <ul className="header-links pull-right">
            <li>
              <a href="#">
                <i className="fa fa-user-o"></i> Minha Conta
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
