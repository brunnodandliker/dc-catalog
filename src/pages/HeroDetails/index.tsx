import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import StatCircle from '../../components/StatCircle';
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

  const createArrayForStatusCircles = (stat: number): number[] => {
    return Array.from(Array(Math.round(stat / 10)).keys())
  }

  if (loading || !hero) return <p>carregando herói...</p>

  return (
    <div className="heroDetailsContainer">
      <div className="photoContainer">
        <img className="hero-image-details" src={hero.images.lg} />
      </div>

      <div className="infoContainer">
        <h1>{hero.name}</h1>
        <p><strong>Name:</strong> {hero.biography.fullName}</p>
        <p><strong>Genger:</strong> {hero.appearance.gender}</p>
        <p><strong>Race:</strong> {hero.appearance.race}</p>
        <p><strong>Weight:</strong> {hero.appearance.weight[1]}</p>
        <p><strong>Height:</strong> {hero.appearance.height[1]}</p>
        <p><strong>Occupation:</strong> {hero.work.occupation}</p>
        <p><strong>Affilitation:</strong> {hero.connections.groupAffiliation}</p>
        <p><strong>Relatives:</strong> {hero.connections.relatives}</p>

        <div className="between top">
          <strong>Intelligence: ({hero.powerstats.intelligence})</strong>
          <div className="row">
            {
              createArrayForStatusCircles(hero.powerstats.intelligence).map(() => <StatCircle />)
            }
          </div>
        </div>

        <div className="between top">
          <strong>Combat: ({hero.powerstats.combat})</strong>
          <div className="row">
            {
              createArrayForStatusCircles(hero.powerstats.combat).map(() => <StatCircle />)
            }
          </div>
        </div>

        <div className="between top">
          <strong>Durability: ({hero.powerstats.durability})</strong>
          <div className="row">
            {
              createArrayForStatusCircles(hero.powerstats.durability).map(() => <StatCircle />)
            }
          </div>
        </div>

        <div className="between top">
          <strong>Power: ({hero.powerstats.power})</strong>
          <div className="row">
            {
              createArrayForStatusCircles(hero.powerstats.power).map(() => <StatCircle />)
            }
          </div>
        </div>

        <div className="between top">
          <strong>Speed: ({hero.powerstats.speed})</strong>
          <div className="row">
            {
              createArrayForStatusCircles(hero.powerstats.speed).map(() => <StatCircle />)
            }
          </div>
        </div>

        <div className="between top">
          <strong>Strength: ({hero.powerstats.strength})</strong>
          <div className="row">
            {
              createArrayForStatusCircles(hero.powerstats.strength).map(() => <StatCircle />)
            }
          </div>
        </div>

      </div>

    </div>
  )
}

export default HeroDetails;
