import React from 'react';
import Icon from './Icon';

function Gnb() {
  return (
    <div>
      <select name="menu">
        <option value="이달의 소비">이달의 소비</option>
        <option value="나의 소비기록">나의 소비기록</option>
        <option value="나의 저축기록">나의 저축기록</option>
        <option value="고정금액 계산기">고정금액 계산기</option>
      </select>
      <Icon type="setting" />
    </div>
  );
}

export default Gnb;
