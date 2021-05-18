import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  background: rgba(100, 100, 100, 0.3);
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  padding: 4em;
  background: #fff;
  box-shadow: 15px 16px 20px -8px rgba(0, 0, 0, 0.28);
  border-radius: 20px;
`;
