import styled, { css } from "styled-components";

const getLogoStyles = (props) => {
  return css`
    width: 100px;
    height: 100px;
    background-image: url(${props.url});
    background-size: cover;
  `;
};

export const TeamLogoComponent = styled.div`
  ${getLogoStyles}
`;
