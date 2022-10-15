import { useEffect, useState } from 'react';
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
          freeSpacePushed = true;
        } else {
          spaces[i][j] = (
            <Space key={index} id={index}>
              {shuffledBuzzwords[freeSpacePushed ? index - 1 : index]}
            </Space>
          );
        }

        index++;
      }
    }

    setBingoSpaces(spaces);
  }, [buzzwords]);

  return <BoardContainer>{bingoSpaces}</BoardContainer>;
};
