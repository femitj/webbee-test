import React from 'react';
import Wrapper from './style';

interface ButtonProps {
  style?: any;
  padding?: string;
  outline?: string;
  color?: string;
  content: string;
  background?: any;
  onClick: () => void;
  borderWidth?: string;
  disabled?: boolean;
}

const Button = ({
  style,
  padding,
  outline,
  color,
  content,
  background,
  onClick,
  borderWidth,
  disabled,
}: ButtonProps) => {
  return (
    <Wrapper
      background={background}
      color={color}
      style={style}
      padding={padding}
      outline={outline}
      onClick={disabled ? () => {} : onClick}
      borderWidth={borderWidth}
      disabled={disabled}
    >
      {content}
    </Wrapper>
  );
};

export default Button;
