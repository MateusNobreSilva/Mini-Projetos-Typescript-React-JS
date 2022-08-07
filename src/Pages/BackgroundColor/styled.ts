import styled from 'styled-components';

interface ContainerProps {
  BGcolor?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  // flex-direction: row | row-reverse | column | column-reverse;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 100vh;
  background-color: ${(props: ContainerProps) => (props.BGcolor ? props.BGcolor : '#FFFF00')};
`;
