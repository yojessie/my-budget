import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const StyledButton = styled.button`
  ${({ theme }) => theme.typo.large}
`;

// interface StyledButtonProps {
//   type: string;
// }

function Header() {
  return (
    <div>
      <div>
        <StyledButton type="button">이달의 소비</StyledButton>
        <ol>
          <li>이달의 소비</li>
          <li>나의 소비기록</li>
          <li>나의 저축기록</li>
          <li>고정금액 계산기</li>
        </ol>
        <Icon type="down" />
      </div>
      <Icon type="setting" />
    </div>
  );
}

export default Header;
