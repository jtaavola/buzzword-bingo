import React, { useState } from 'react';
import { BiRefresh, BiPencil } from 'react-icons/bi';
import styled from 'styled-components';
import { Board } from './components/Board';

const buzzwords = [
  'Can you see my screen?',
  "You're on mute.",
  "Let's take this offline.",
  "I'm having VPN issues.",
  'Your audio is cutting out.',
  'Artificial Intelligence',
  '*Small talk*',
  'Machine Learning',
  "We're two minutes over.",
  '*Awkward silence*',
  'The Cloud',
  "I'll give you all some time back.",
  'Can I share my screen?',
  'Scalable',
  'I have to drop.',
  '"brb" in the chat',
  "Let's set up a working session.",
  'Was that your cat?',
  'It looks like everyone is here.',
  'Are you in the office?',
  'Let me share my screen.',
  'Happy Friday!',
  'Touch base',
  '*Coffee break*',
  'My audio cut out.',
  '*Non-technical person deprecates themselves on their lack of technical knowledge*',
  'I was on mute.',
  'NoSQL',
  'GraphQL',
];

const BuzzwordBingo = styled.div`
  min-height: 100vh;
  // use small viewport height if browser supported
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #282c34;
`;

const Actions = styled.div`
  display: flex;
  justify-content: right;
  width: 80vmin;
  @media (max-width: 463px) {
    width: 95vmin;
  }
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4em;
  width: 4em;
  border: thin solid black;
  margin: 0.5em;
  border-radius: 5px;
  &:hover {
    scale: 1.05;
  }
  cursor: pointer;
`;

const RefreshButton = styled(ActionButton)`
  background-color: lightblue;
`;

const EditButton = styled(ActionButton)`
  background-color: yellow;
`;

const shuffle = (words) => {
  return words
    .map((val) => ({ val, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ val }) => val)
    .slice(0, 24);
};

const App = () => {
  const [shuffledBuzzwords, setShuffledBuzzwords] = useState(
    shuffle(buzzwords)
  );

  return (
    <BuzzwordBingo>
      <h1>Buzzword Bingo</h1>
      <Actions>
        <EditButton type="button">
          <BiPencil size={'5em'} color="black" />
        </EditButton>
        <RefreshButton type="button">
          <BiRefresh
            size={'5em'}
            color="black"
            onClick={() => setShuffledBuzzwords(shuffle(buzzwords))}
          />
        </RefreshButton>
      </Actions>
      <Board buzzwords={shuffledBuzzwords}></Board>
    </BuzzwordBingo>
  );
};

export default App;
