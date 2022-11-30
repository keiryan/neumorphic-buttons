import styled from "styled-components";

export const Base = styled.div`
  display: flex;
`;

export const Container = styled(Base)`
  width: 100vw;
  height: 100vh;
  background-color: #e0e0e0;
  align-items: center;
  justify-content: center;
  position: relative;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  cursor: default;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Tip = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 2rem;
`;
