import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import IHeroProps from '../../interfaces/IHeroProps';
import api from '../../services/api';
import { getAllHeroes } from '../../services/requests';
import './style.css';

interface IHeroDetailsParams {
  id: string;
}

const HeroDetails : React.FC = (props) => {
  let params = useParams<IHeroDetailsParams>();
  const [hero, setHero] = useState<IHeroProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

    const getHero = async () => {
      try {
        const { data } = await getAllHeroes();
        const dcHero = data.find((hero: IHeroProps) => hero.id.toString() === params.id)
        if (!dcHero) return;
        setHero(dcHero);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
  }

  useEffect(() => {
      getHero();
  }, [])

  if (loading || !hero) return <p>carregando herói...</p>

  return (
    <div className="heroDetailsContainer">
      <div className="photoContainer">
        <img className="hero-image-details" src={hero.images.lg} />
      </div>

      <div className="infoContainer">
        <h1>{hero.name}</h1>
        <p>{hero.biography.fullName}</p>
        <p>{hero.appearance.gender}</p>
        <p>{hero.appearance.race}</p>
        <p>{hero.appearance.weight[1]}</p>
        <p>{hero.appearance.height[1]}</p>
        <p>{hero.work.occupation}</p>
        <p>{hero.connections.groupAffiliation}</p>
        <p>{hero.connections.relatives}</p>
        <p>{hero.powerstats.intelligence}</p>
        <p>{hero.powerstats.combat}</p>
        <p>{hero.powerstats.durability}</p>
        <p>{hero.powerstats.power}</p>
        <p>{hero.powerstats.speed}</p>
        <p>{hero.powerstats.strength}</p>
      </div>

    </div>
  )
}

export default HeroDetails;
