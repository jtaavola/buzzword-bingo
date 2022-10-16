import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FreeSpace, Space } from '../Space';

const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-template-rows: repeat(5, minmax(0, 1fr));
  height: 80vmin;
  width: 80vmin;
  @media (max-width: 463px) {
    height: 95vmin;
    width: 95vmin;
  }
`;

export const Board = ({ buzzwords }) => {
  const [bingoSpaces, setBingoSpaces] = useState(
    Array.from(Array(5), () => new Array(5))
  );

  const [selectedSpaces, setSelectedSpaces] = useState(
    Array.from(Array(5), () => new Array(5))
  );

  const checkForWin = useCallback(() => {
    let hasWon = false;

    // Check for winning row
    for (let i = 0; i < 5; i++) {
      hasWon = true;

      for (let j = 0; j < 5; j++) {
        if (!selectedSpaces[i][j]) {
          hasWon = false;
          break;
        }
      }

      if (hasWon) {
        return true;
      }
    }

    // Check for winning column
    for (let i = 0; i < 5; i++) {
      hasWon = true;

      for (let j = 0; j < 5; j++) {
        if (!selectedSpaces[j][i]) {
          hasWon = false;
          break;
        }
      }

      if (hasWon) {
        return true;
      }
    }

    // Check along diagonals
    for (let i = 0; i < 5; i++) {
      hasWon = true;

      if (!selectedSpaces[i][i]) {
        hasWon = false;
        break;
      }
    }

    if (hasWon) {
      return true;
    }

    for (let i = 0; i < 5; i++) {
      hasWon = true;

      if (!selectedSpaces[i][4 - i]) {
        hasWon = false;
        break;
      }
    }

    if (hasWon) {
      return true;
    }

    return false;
  }, [selectedSpaces]);

  const updateSelectedState = useCallback(
    (id, isSelected) => {
      selectedSpaces[Math.floor(id / 5)][id % 5] = isSelected;
      setSelectedSpaces(selectedSpaces);
      checkForWin();
    },
    [checkForWin, selectedSpaces]
  );

  useEffect(() => {
    const shuffledBuzzwords = buzzwords
      .map((val) => ({ val, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ val }) => val)
      .slice(0, 24);

    let spaces = Array.from(Array(5), () => new Array(5));
    let freeSpacePushed = false;
    let index = 0;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (index === 12) {
          spaces[i][j] = <FreeSpace key={index}></FreeSpace>;
          selectedSpaces[i][j] = true;
          freeSpacePushed = true;
        } else {
          spaces[i][j] = (
            <Space key={index} id={index} onAction={updateSelectedState}>
              {shuffledBuzzwords[freeSpacePushed ? index - 1 : index]}
            </Space>
          );
        }

        index++;
      }
    }

    setBingoSpaces(spaces);
    setSelectedSpaces(selectedSpaces);
  }, [buzzwords, selectedSpaces, updateSelectedState]);

  return <BoardContainer>{bingoSpaces}</BoardContainer>;
};
