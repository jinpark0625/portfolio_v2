import styled from "styled-components";

export const LostWay = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .text {
    color: #fff;
    font-size: ${({ theme: { fontSize } }) => fontSize.tagline}rem;
  }
`;
