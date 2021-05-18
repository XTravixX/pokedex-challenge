import styled from 'styled-components';
import { Modal } from '../Modal';

export const ModalInfo = styled(Modal)`
  display: flex;
  padding: 1em;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  flex-wrap: wrap;
`;

export const PokemonSprite = styled.img`
  width: 50%;
`;

export const Types = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0px;
`;

export const Stats = styled(Types)``;

export const Name = styled.p`
  font-weight: bold;
  position: relative;
  right: 2rem;
`;
