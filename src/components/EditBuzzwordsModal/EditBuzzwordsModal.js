import { Modal, Textarea } from '@mantine/core';
import { useState } from 'react';
import styled from 'styled-components';

const Submit = styled.button`
  float: right;
  margin-top: 0.5em;
  background-color: lightgreen;
  border: none;
  border-radius: 5px;
  height: 2.5em;
  font-size: 1em;
  padding-right: 1em;
  padding-left: 1em;
  &:hover {
    scale: 1.05;
  }
`;

export const EditBuzzwordsModal = ({
  buzzwords,
  opened,
  onClose,
  onSubmit,
}) => {
  const [customizedBuzzwords, setCustomizedBuzzwords] = useState(buzzwords);

  const updateBuzzwords = (text) => {
    setCustomizedBuzzwords(text.split('\n'));
    console.log(customizedBuzzwords);
  };

  const cancelEdit = () => {
    setCustomizedBuzzwords(buzzwords);
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={cancelEdit}
      title="Customize the buzzwords!"
    >
      <Textarea
        value={customizedBuzzwords.join('\n')}
        onChange={(event) => updateBuzzwords(event.currentTarget.value)}
        label="Input one buzzword per line"
        autosize
        minRows={2}
        maxRows={15}
      />
      <Submit type="button" onClick={() => onSubmit(customizedBuzzwords)}>
        Submit
      </Submit>
    </Modal>
  );
};
