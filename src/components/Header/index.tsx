import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IHeroProps from '../../interfaces/IHeroProps';
import { ActionCreators } from '../../store/actions';
import './style.css';

// interface IHeaderProps {
//   // searchText: string;
//   // setSearchText: (data: string) => void;
// }

const Header: React.FC = (props: any) => {

  const [searchText, setSearchText] = useState<string>('');
  // console.log('props', props);

  useEffect(() => {
    handleSearch();
  }, [searchText])

  const handleSearch = () => {
    if (!searchText) return props.addHeroesToRedux(props.allHeroes);

    const findHeroes = props.allHeroes.filter((hero: IHeroProps) => {
      return hero.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || hero.biography.fullName.toLowerCase().indexOf(searchText.toLowerCase()) > -1
    });
    props.addHeroesToRedux(findHeroes);
  }

  const handleSort = (orderBy: string) => {
    const allHeroes = JSON.parse(JSON.stringify(props.allHeroes));
    const sorted = allHeroes.sort((a: any, b: any) => b.powerstats[orderBy] - a.powerstats[orderBy]);
    console.log('clicou ', orderBy, props.allHeroes);
    console.log(sorted);
    props.addHeroesToRedux(sorted);
  }


  return (
    <header>
      <div>
        <img className="dc-logo" src="./images/dc-logo.png" />
      </div>

      <div className="header-item">
        <span onClick={() => handleSort('intelligence')}>Intelligence</span>
      </div>

      <div className="header-item">
        <span onClick={() => handleSort('strength')}>Strength</span>
      </div>

      <div className="header-item">
        <span onClick={() => handleSort('speed')}>Speed</span>
      </div>

      <div className="header-item">
        <span onClick={() => handleSort('durability')}>Durability</span>
      </div>

      <div className="header-item">
        <span onClick={() => handleSort('power')}>Power</span>
      </div>

      <div className="header-item">
        <span onClick={() => handleSort('combat')}>Combat</span>
      </div>

      <div className="header-item">
        <input value={searchText} onChange={e => setSearchText(e.target.value)} placeholder="Search..." className="search-input" />
      </div>
    </header>
  );
}

const mapStateToProps = (state: any): any => ({
  heroes: state.heroesReducer.heroes,
  allHeroes: state.heroesReducer.allHeroes,
});

const mapDispatchToProps = (dispatch: any): any => bindActionCreators({
  addHeroesToRedux: ActionCreators.addHeroesToRedux,
  addAllHeroesToRedux: ActionCreators.addAllHeroesToRedux,
  // ...ActionCreators
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Header);
