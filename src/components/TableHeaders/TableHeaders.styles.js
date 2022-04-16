import styled, { css } from "styled-components";
import { tableRowStyle } from "../TableRow/TableRow.styles";

export const TableHeadersContainer = styled.div`
  ${tableRowStyle}

  height: 3rem;
  background: white;
  border-bottom: solid black 1px;
  span {
    font-weight: bold;
    font-size: 25px;
    line-height: 18px;
  }
`;
