import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import IHeroProps from '../../interfaces/IHeroProps';
import api from '../../services/api';
import { getAllHeroes } from '../../services/requests';

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

  return <h1>{hero.name}</h1>
}

export default HeroDetails;
