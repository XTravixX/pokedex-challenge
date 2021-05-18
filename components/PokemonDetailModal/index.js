import styled from 'styled-components';
import { Modal } from '../Modal';
import { PokemonSprite } from './style';

export const PokemonDetailModal = ({ pokemon, onClose }) =>
  !!pokemon?.name && (
    <Modal onClose={onClose}>
      <PokemonSprite src={pokemon.sprites.front_default} />
      {pokemon.name}
    </Modal>
  );
