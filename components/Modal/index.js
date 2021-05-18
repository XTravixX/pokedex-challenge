import { Overlay, Card } from './style';

export const Modal = ({ onClose, ...props }) => (
  <Overlay onClick={onClose}>
    <Card {...props} />
  </Overlay>
);
