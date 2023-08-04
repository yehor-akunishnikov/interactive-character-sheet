import React, { useState } from 'react';

import { Button, useColorMode } from '@chakra-ui/react';

import './style.css';

import GeneralPointsSheet from './GeneralPointsSheet.js';
import DetailedStatsSheet from './DetailedStatsSheet.js';

export default function App() {
  const [isCharacterCreated, setIsCharacterCreated] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

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
            navigator.clipboard.writeText(
              localStorage.getItem('characterData')
            );
          }}
        >
          Export character data
        </Button>
      )}
      <DetailedStatsSheet />
      <Button
        position="fixed"
        bottom="5px"
        right="5px"
        size="xs"
        onClick={toggleColorMode}
      >
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </>
  );
}
