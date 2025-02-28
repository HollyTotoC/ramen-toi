import React, { useState } from 'react';
import { Button } from './ui/button';

interface NoButtonProps {
  setIsMoved: (value: boolean) => void;
  isMoved: boolean;
}

const NoButton: React.FC<NoButtonProps> = ({ setIsMoved, isMoved }) => {
  const [noButtonPosition, setNoButtonPosition] = useState({ top: '0', left: '0' });

  const moveNoButton = () => {
    const newTop = Math.random() * (window.innerHeight - 50) + 'px';
    const newLeft = Math.random() * (window.innerWidth - 100) + 'px';
    setNoButtonPosition({ top: newTop, left: newLeft });
    setIsMoved(true);
    console.log('Button moved to:', { top: newTop, left: newLeft });
  };

  return (
    <Button
    
      style={{ 
        position: isMoved ? 'fixed' : 'relative', 
        top: noButtonPosition.top, 
        left: noButtonPosition.left 
      }}
      onClick={moveNoButton}
    >
      No
    </Button>
  );
};

export default NoButton;