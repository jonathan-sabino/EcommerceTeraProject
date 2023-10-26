import '../assets/css/searchbar.css';
import React from 'react';

export default function SearchBar() {
  return (
    <>
      <div className="col-md-6">
        <div className="header-search">
          <form>
            <input className="input" placeholder="Digite aqui..." />
            <button className="search-btn">Buscar</button>
          </form>
        </div>
      </div>
    </>
  );
}
