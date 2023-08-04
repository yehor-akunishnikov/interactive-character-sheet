import React, { useState } from 'react';

import './style.css';

import GeneralPointsSheet from './GeneralPointsSheet.js';
import DetailedStatsSheet from './DetailedStatsSheet.js';

export default function App() {
  const [isCharacterCreated, setIsCharacterCreated] = useState(false);

  return (
    <>
      <GeneralPointsSheet
        isCharacterCreated={isCharacterCreated}
        onCharacterCreation={() => setIsCharacterCreated(true)}
      />
      <DetailedStatsSheet />
    </>
  );
}
