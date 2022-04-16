import styled, { css } from "styled-components";

export const tableRowStyle = css`
  display: grid;
  grid-template-columns: 30% 20% 20% 20%;
  grid-template-rows: 100%;
  width: 100%;
  align-items: center;
`;

export const RowComponent = styled.div`
  ${tableRowStyle}

  height: 8rem;
  background: #fcf9ff;
  margin-bottom: 3px;
  span {
    font-size: 18px;
  }

  img {
    height: 100px;
    width: 100px;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
