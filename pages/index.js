import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import { usePokeListApi, usePokeDetailApi } from '../hooks/usePokeApi';
import { Loader, List, Item, PokemonDetailModal } from '../components';

export default function PokeList() {
  const router = useRouter();
  const [showLoader, setShowLoader] = React.useState(true);
  const pokemonList = usePokeListApi();
  const pokemonDetail = usePokeDetailApi(pokemonList);

  React.useEffect(() => {
    setTimeout(() => setShowLoader(false), 3000);
  }, []);

  if (showLoader || !pokemonList.length) {
    return <Loader />;
  }

  return (
    <>
      <PokemonDetailModal
        pokemon={pokemonDetail}
        onClose={() => {
          router.push('/');
        }}
      />

      <List>
        {pokemonList.map(({ name }) => (
          <Link key={name} href={{ pathname: '/', query: { pokemon: name } }}>
            <Item>{name}</Item>
          </Link>
        ))}
      </List>
    </>
  );
}
