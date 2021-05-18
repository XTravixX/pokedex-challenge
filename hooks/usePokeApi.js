import React from 'react';
import { useRouter } from 'next/router';

export function usePokeListApi() {
  const [pokemonList, setPokemonList] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=200&offset=0'
      );
      const data = await response.json();
      setPokemonList(data.results);
    })();
  }, []);

  return pokemonList;
}

export function usePokeDetailApi(pokemonList) {
  const { query } = useRouter();
  const [pokemonDetail, setPokemonDetail] = React.useState({});

  React.useEffect(() => {
    (async () => {
      if (query?.pokemon && pokemonList.length) {
        const { url } = pokemonList.find(
          (pokemon) => query.pokemon === pokemon.name
        );
        const response = await fetch(url);
        const data = await response.json();
        setPokemonDetail(data);
      }

      if (!query?.pokemon) {
        setPokemonDetail({});
      }
    })();
  }, [query?.pokemon, pokemonList]);

  return pokemonDetail;
}
