import React, { useState } from 'react';
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

export const Space = ({ id, onAction, children }) => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleIsSelected = () => {
    setIsSelected(!isSelected);
    if (onAction) {
      onAction(id);
    }
  };

  return (
    <SpaceContainer
      type="button"
      selected={isSelected}
      onClick={toggleIsSelected}
    >
      <FluidText>{children}</FluidText>
    </SpaceContainer>
  );
};

export const FreeSpace = () => {
  return (
    <FreeSpaceContainer selected={true}>
      <FluidText>FREE</FluidText>
    </FreeSpaceContainer>
  );
};
