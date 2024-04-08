"use client";

import React, { useState } from "react";

function Pokedex() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setPokemonName(event.target.value.toLowerCase());
  };

  const fetchPokemonData = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      if (!response.ok) {
        throw new Error("Pokemon not found!");
      }
      const data = await response.json();
      setPokemonData(data);
      setError(null);
    } catch (error) {
      setError("Pokemon not found!");
      setPokemonData(null);
    }
  };

  return (
    <div className="container min-h-full mx-auto bg-base-100 pt-10">
      <div className="flex flex-col md:flex-row items-center justify-around ">
        <h1 className="text-center text-6xl text-primary">Pokedox</h1>

        <div className="mt-8 flex flex-row gap-5 items-center justify-center text-base-content">
          <div className="relative">
            <input
              type="text"
              id="Search"
              placeholder="Search for..."
              className="input input-bordered input-md w-full max-w-xs"
              value={pokemonName}
              onChange={handleInputChange}
            />

            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
              <button
                disabled
                type="button"
                className="text-primary hover:text-accent"
              >
                <span className="sr-only">Search</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </span>
          </div>

          <button className="btn btn-primary btn-sm" onClick={fetchPokemonData}>
            Search
          </button>
        </div>
      </div>

      {error && (
        <div className="mt-4 text-error text-center">
          <p>{error}</p>
          <p>Try searching for another Pokemon!</p>
        </div>
      )}

      {pokemonData ? (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-center">
            {pokemonData.name.charAt(0).toUpperCase() +
              pokemonData.name.slice(1)}
          </h2>
          <div className="divider"></div>
          <div className="flex flex-col md:flex-row gap-5">
            <img
              src={pokemonData.sprites.other["official-artwork"].front_default}
              alt={pokemonData.name}
              className="mb-4"
            />

            <table className="table mx-auto">
              <tbody>
                <tr>
                  <td>Abilities</td>
                  <td>
                    {pokemonData.abilities
                      .map((ability) => ability.ability.name)
                      .join(", ")}
                  </td>
                </tr>
                <tr>
                  <td>Moves</td>
                  <td>
                    {pokemonData.moves.map((move) => move.move.name).join(", ")}
                  </td>
                </tr>
                <tr>
                  <td>Base Experience</td>
                  <td>{pokemonData.base_experience}</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>{pokemonData.weight}</td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td>{pokemonData.height}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="divider"></div>
        </div>
      ) : (
        <div className="mt-20 text-center text-xl">Search for a pokemon to know about it</div>
      )}
    </div>
  );
}

export default Pokedex;
