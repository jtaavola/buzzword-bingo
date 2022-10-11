import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FreeSpace, Space } from '../Space';

const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-template-rows: repeat(5, minmax(0, 1fr));
  height: 80vmin;
  width: 80vmin;
`;

export const Board = ({ buzzwords }) => {
  const [bingoSpaces, setBingoSpaces] = useState([]);

  useEffect(() => {
    const shuffledBuzzwords = buzzwords
      .map((val) => ({ val, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ val }) => val)
      .slice(0, 24);

    console.log({ shuffledBuzzwords });

    let spaces = [];
    let freeSpacePushed = false;

    for (let i = 0; i < shuffledBuzzwords.length + 1; i++) {
      // Free space
      if (i === 12) {
        spaces.push(<FreeSpace key={i} />);
        freeSpacePushed = true;
      } else {
        spaces.push(
          <Space key={i} id={i}>
            {shuffledBuzzwords[freeSpacePushed ? i - 1 : i]}
          </Space>
        );
      }
    }

    setBingoSpaces(spaces);
  }, [buzzwords]);

  return <BoardContainer>{bingoSpaces}</BoardContainer>;
};
