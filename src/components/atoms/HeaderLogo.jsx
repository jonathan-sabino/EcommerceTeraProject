import teraGamesLogo from '../../assets/images/logo.svg';
// import React from 'react';

export default function HeaderLogo() {
  return (
    <>
      <div className="header-logo">
        <a href="#" className="logo">
          <img src={teraGamesLogo} />
        </a>
      </div>
    </>
  );
}
