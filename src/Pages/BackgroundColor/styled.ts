import styled from 'styled-components';

interface ContainerProps {
  BGcolor?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  // flex-direction: row | row-reverse | column | column-reverse;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: flex-start;
  width: 100%;
  height: 100vw;
  //height: calc(100%);
  background-color: ${(props: ContainerProps) => (props.BGcolor ? props.BGcolor : '#FFFF00')};
`;
//  width: ${(props: SideMenuProps) => props.larguraSideMenu === null || props.larguraSideMenu === undefined ? (
//         5
//     ) : (
//         props.larguraSideMenu
//     )}%;
