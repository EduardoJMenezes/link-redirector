import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface LinkButtonProps {
  text: string;
  url: string;
  onClick?: () => void;
}

const LinkButton: React.FC<LinkButtonProps> = ({ text, url, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(url);
    }
  };

  return (
    <Button
      variant="primary"
      className="my-2 w-100"
      onClick={handleClick}
      href={url.startsWith('http') ? url : undefined}
      target={url.startsWith('http') ? "_blank" : undefined}
      rel={url.startsWith('http') ? "noopener noreferrer" : undefined}
    >
      {text}
    </Button>
  );
}

export default LinkButton;
