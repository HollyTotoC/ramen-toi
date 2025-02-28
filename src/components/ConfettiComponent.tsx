import React from 'react';
import Confetti from 'react-confetti';

interface ConfettiComponentProps {
  showConfetti: boolean;
}

const ConfettiComponent: React.FC<ConfettiComponentProps> = ({ showConfetti }) => {
  return showConfetti ? <Confetti /> : null;
};

export default ConfettiComponent;