import { ModalInfo, PokemonSprite, Types, Stats, Name } from './style';

export const PokemonDetailModal = ({ pokemon, onClose }) =>
  !!pokemon?.name && (
    <ModalInfo onClose={onClose}>
      <PokemonSprite src={pokemon.sprites.front_default} />
      <Stats>
        {pokemon.stats.map(({ base_stat, stat }) => (
          <li>
            {stat.name}:{base_stat}
          </li>
        ))}
      </Stats>
      <Name>{pokemon.name}</Name>
      <Types>
        <strong>Types: </strong>
        {pokemon.types.map(({ type }) => (
          <li>{type?.name}</li>
        ))}
      </Types>
    </ModalInfo>
  );
