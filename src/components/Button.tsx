import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  height: 48px;
  border: ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radius.regular};
  box-shadow: ${({ theme }) => theme.shadow};
  background-color: ${({ theme }) => theme.color.green};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.typo.large};
  font-weight: 700;
`;

interface ButtonProps {
  title: string;
  type?: 'submit' | 'button' | 'reset';
}

function Button({ title, type }: ButtonProps) {
  return <StyledButton type={type || 'button'}>{title}</StyledButton>;
}

export default Button;
