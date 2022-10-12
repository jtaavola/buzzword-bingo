import styled from 'styled-components';
import { Board } from './components/Board';

const sampleBuzzwords = [
  'Can you see my screen?',
  "You're on mute",
  "Let's take this offline",
  "I'm having VPN issues",
  'Your audio is cutting out',
  'Artificial Intelligence',
  'Small talk',
  'Machine Learning',
  "We're two minutes over",
  '*Awkward silence*',
  'The Cloud',
  "I'll give you all three minutes back",
  '', // free space
  'Can I share my screen?',
  'Scalable',
  'I have to drop',
  '"brb" in the chat',
  "Let's set up a working session",
  'Was that your cat?',
  'It looks like everyone is here',
  'Are you in the office?',
  'Let me share my screen',
  'Happy Friday!',
  'Touch base',
  'Coffee break',
];

const BuzzwordBingo = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #282c34;
`;

const App = () => {
  return (
    <BuzzwordBingo>
      <Board buzzwords={sampleBuzzwords}></Board>
    </BuzzwordBingo>
  );
};

export default App;
