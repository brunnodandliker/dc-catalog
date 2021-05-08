import React from 'react';
import './style.css';

interface IHeaderProps {
  searchText: string;
  setSearchText: (data: string) => void;
}

const Header: React.FC<IHeaderProps> = (props) => {
  // console.log('props', props);
  return (
    <header>
      <div>
        <img className="dc-logo" src="./images/dc-logo.png" />
      </div>

      <div className="header-item">
        <span>Intelligence</span>
      </div>

      <div className="header-item">
        <span>Strength</span>
      </div>

      <div className="header-item">
        <span>Speed</span>
      </div>

      <div className="header-item">
        <span>Durability</span>
      </div>

      <div className="header-item">
        <span>Power</span>
      </div>

      <div className="header-item">
        <span>Combat</span>
      </div>

      <div className="header-item">
        <input value={props.searchText} onChange={e => props.setSearchText(e.target.value)} placeholder="Search..." className="search-input" />
      </div>
    </header>
  );
}

export default Header;
