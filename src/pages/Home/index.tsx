import React, { useEffect, useState, Fragment } from 'react';
import './style.css';
import api from '../../services/api';
import IHeroProps from '../../interfaces/IHeroProps';
import HeroCard from '../../components/HeroCard';
import { getAllHeroes } from '../../services/requests';
import Header from '../../components/Header';

const DC_COMICS = 'DC Comics';

function Home() {

    const [heroes, setHeroes] = useState<IHeroProps[]>([]);
    const [allHeroes, setAllHeroes] = useState<IHeroProps[]>([]);

    const [searchText, setSearchText] = useState<string>('');

    const getHeroes = async () => {
      try {
        const { data } = await getAllHeroes();
        const dcHeroes = data.filter((hero: IHeroProps) => hero.biography.publisher === DC_COMICS)
        setHeroes(dcHeroes);
        setAllHeroes(dcHeroes);
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
        getHeroes();
    }, [])

    useEffect(() => {
      handleSeach();
    }, [searchText])

    const handleSeach = () => {
      if (!searchText) return setHeroes(allHeroes);

      const findHeroes = allHeroes.filter(hero => hero.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
      setHeroes(findHeroes);
    }

  return (
    <>
      <Header searchText={searchText} setSearchText={setSearchText}  />

      <div className="homeContainer">
        {
            heroes.map(hero => <HeroCard hero={hero} />)
        }
      </div>
    </>
  );
}

export default Home;
