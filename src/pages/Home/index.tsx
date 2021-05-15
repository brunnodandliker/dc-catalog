import React, { useEffect, useState, Fragment } from 'react';
import './style.css';
import api from '../../services/api';
import IHeroProps from '../../interfaces/IHeroProps';
import HeroCard from '../../components/HeroCard';
import { getAllHeroes } from '../../services/requests';
import Header from '../../components/Header';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../../store/actions';

const DC_COMICS = 'DC Comics';

function Home(props: any) {
    const getHeroes = async () => {
      try {
        const { data } = await getAllHeroes();
        const dcHeroes = data.filter((hero: IHeroProps) => hero.biography.publisher === DC_COMICS)
        props.addHeroesToRedux(dcHeroes);
        console.log('dcHeroes', dcHeroes)
        props.addAllHeroesToRedux(dcHeroes);
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
        getHeroes();
    }, [])


  return (
    <>
      <Header />

      <div className="homeContainer">
        {
          props.heroes.map((hero: any) => <HeroCard hero={hero} />)
        }
      </div>
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);

