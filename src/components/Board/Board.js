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
    let spaces = [];
    for (let i = 0; i < 25; i++) {
      if (i === 12) {
        spaces.push(<FreeSpace key={i} />);
      } else {
        spaces.push(
          <Space key={i} id={i}>
            {buzzwords[i]}
          </Space>
        );
      }
    }
    setBingoSpaces(spaces);
  }, [buzzwords]);

  return <BoardContainer>{bingoSpaces}</BoardContainer>;
};
