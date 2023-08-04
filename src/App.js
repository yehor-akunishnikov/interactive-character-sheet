import React, { useState } from 'react';

import { Button } from '@chakra-ui/react';

import './style.css';

import GeneralPointsSheet from './GeneralPointsSheet.js';
import DetailedStatsSheet from './DetailedStatsSheet.js';

export default function App() {
  const [isCharacterCreated, setIsCharacterCreated] = useState(false);

  return (
    <>
      <GeneralPointsSheet
        isCharacterCreated={isCharacterCreated}
        onCharacterCreation={() => {
          setIsCharacterCreated(true);
        }}
      />
      {isCharacterCreated && (
        <Button
          size="xs"
          colorScheme="blue"
          position="fixed"
          bottom="5px"
          left="5px"
          onClick={() => {
            console.log(localStorage.getItem('characterData'));
          }}
        >
          Export character data
        </Button>
      )}
      <DetailedStatsSheet />
    </>
  );
}
