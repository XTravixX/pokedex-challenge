import { StyledLoader } from './style';

export function Loader() {
  return (
    <StyledLoader>
      <div className="pokeballs">
        <img
          src={
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png'
          }
        />
        <img
          src={
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'
          }
        />
        <img
          src={
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png'
          }
        />
      </div>
    </StyledLoader>
  );
}
