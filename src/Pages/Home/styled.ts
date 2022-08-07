import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  // flex-direction: row | row-reverse | column | column-reverse;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: flex-start;
  width: 100%;
  // height: 100vw;
  height: calc(100%);
  background-color: aliceblue;
`;
