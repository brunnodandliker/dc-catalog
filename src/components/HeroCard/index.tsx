import { Link } from "react-router-dom";
import IHeroProps from "../../interfaces/IHeroProps";
import './style.css';

interface IHeroCardProps {
  hero: IHeroProps;
}

const HeroCard : React.FC<IHeroCardProps> = (props) => {
  console.log('props', props);
  const hero = props.hero;

  return (
    <Link to={`/hero/${hero.id}`} key={hero.id}>
      <div>
        <img className="hero-image" src={hero.images.lg} />
        <p>{hero.name}</p>
        <p>Inteligence: {hero.powerstats.intelligence}</p>
      </div>
    </Link>
  )
}

export default HeroCard;
