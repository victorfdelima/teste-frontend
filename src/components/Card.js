import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";
import pokemonTypeColors from "../helpers/pokemonTypeColors";
import "../Css/styles.css";
function Card({ pokemon }) {
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);
  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name);
  };
  const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🖤";

  return (
    <div className="Card">
      <div>
        <button className="pokemon-heart-btsn" onClick={onHeartClick}>
          {heart}
          Favoritar
        </button>
      </div>
      <div className="Card__img">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <div className="Card__name">{pokemon.name}</div>
      <div className="Card__types">
        {pokemon.types.map((type) => {
          return (
            <div
              className="Card__type"
              style={{ backgroundColor: pokemonTypeColors[type.type.name] }}
            >
              {type.type.name}
            </div>
          );
        })}
      </div>
      <div className="Card__info">
        <div className="Card__data">
          <p className="title">Peso</p>
          <p>{pokemon.weight}</p>
        </div>
        <div className="Card__data">
          <p className="title">Tamanho</p>
          <p>{pokemon.height} Kg</p>
        </div>
        <div className="Card__data">
          <p className="title">Habilidade</p>
          <p className="ability">{pokemon.abilities[0].ability.name}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
