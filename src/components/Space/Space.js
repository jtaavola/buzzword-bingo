import React from 'react';
import styled from 'styled-components';
import { FluidText } from '../FluidText';

const SpaceContainer = styled.button`
  background-color: ${(props) => (props.selected ? 'lightgreen' : 'white')};
  color: black;
  border: thin solid black;
  border-radius: 5px;
  &:hover {
    scale: 1.05;
  }
  padding: 0.5em 0.25em;
  cursor: pointer;
`;

const FreeSpaceContainer = styled(SpaceContainer)`
  &:hover {
    // override the scaling back to default for free space
    scale: 1;
  }
  cursor: auto;
`;

export const Space = ({ selected, onAction, children }) => {
  return (
    <SpaceContainer type="button" selected={selected} onClick={onAction}>
      <FluidText>{children}</FluidText>
    </SpaceContainer>
  );
};

export const FreeSpace = () => {
  return (
    <FreeSpaceContainer type="button" selected={true}>
      <FluidText>FREE</FluidText>
    </FreeSpaceContainer>
  );
};
