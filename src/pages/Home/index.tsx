import React, { useEffect, useState } from 'react';
import './style.css';
import api from '../../services/api';
import IHeroProps from '../../interfaces/IHeroProps';
import HeroCard from '../../components/HeroCard';
import { getAllHeroes } from '../../services/requests';

const DC_COMICS = 'DC Comics';

function Home() {

    const [heroes, setHeroes] = useState<IHeroProps[]>([]);

    const getHeroes = async () => {
      try {
        const { data } = await getAllHeroes();
        const dcHeroes = data.filter((hero: IHeroProps) => hero.biography.publisher === DC_COMICS)
        setHeroes(dcHeroes);
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
        getHeroes();
    }, [])

  return (
    <div className="homeContainer">
     {
        heroes.map(hero => <HeroCard hero={hero} />)
     }
    </div>
  );
}

export default Home;
