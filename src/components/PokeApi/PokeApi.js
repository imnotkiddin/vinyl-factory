import { React, useEffect, useState } from "react";

export const PokeApi = () => {
  const [pokemon, setPokemon] = useState(null);
  const [id, setId] = useState(1);

  const handleAnterior = () => {
    id > 1 && setId(id - 1);
  };
  const handleSiguiente = () => {
    setId(id + 1);
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) =>
        setPokemon({
          name: data.name,
          img: data.sprites.front_default,
        })
      );
  }, [id]);

  return (
    <div className="pokeapi">
      <h2>PokeApi</h2>
      {pokemon !== null && (
        <div key={pokemon.name} className="text-capitalize">
          <img src={pokemon.img} alt={pokemon.name} />
          <p>{pokemon.name}</p>
        </div>
      )}
      <button
        className="btn btn-outline-primary mx-4"
        onClick={handleAnterior}
        disabled={id === 1}
      >
        Anterior
      </button>
      <button
        className="btn btn-outline-primary mx-4"
        onClick={handleSiguiente}
      >
        Siguiente
      </button>
    </div>
  );
};
