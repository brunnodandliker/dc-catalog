import { Link } from "react-router-dom";
import IHeroProps from "../../interfaces/IHeroProps";
import './style.css';

interface IHeroCardProps {
  hero: IHeroProps;
}

const HeroCard : React.FC<IHeroCardProps> = (props) => {
  const hero = props.hero;

  return (
    <Link className="heroCardContainer" to={`/hero/${hero.id}`} key={hero.id}>
      <div>
        <img className="hero-image" src={hero.images.lg} />
        <h3>{hero.name}</h3>

        <div className="line">
          <p>Intelligence:</p>
          <p className="bold">{hero.powerstats.intelligence}</p>
        </div>

        <div className="line">
          <p>Power:</p>
          <p className="bold">{hero.powerstats.power}</p>
        </div>

        <div className="line">
          <p>Speed:</p>
          <p className="bold">{hero.powerstats.speed}</p>
        </div>

        <div className="line">
          <p>Strength:</p>
          <p className="bold">{hero.powerstats.strength}</p>
        </div>

        <div className="line">
          <p>Durability:</p>
          <p className="bold">{hero.powerstats.durability}</p>
        </div>

        <div className="line">
          <p>Combat:</p>
          <p className="bold">{hero.powerstats.combat}</p>
        </div>
      </div>
    </Link>
  )
}

export default HeroCard;
