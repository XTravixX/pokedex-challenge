import styled from 'styled-components';

export const Item = styled.li`
  padding: 1em;
  border-radius: 10px;
  list-style-type: none;
  width: fit-content;
  margin: 0.5em;
  border: #fff solid 1px;
  box-shadow: 15px 16px 20px -8px rgba(0, 0, 0, 0.28);
  cursor: pointer;

  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
    color: #fff;
    background: #81aae0;
  }
`;
