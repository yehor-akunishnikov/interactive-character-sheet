import React, { useState, useEffect } from 'react';
import './style.css';

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  HStack,
  TableCaption,
  Box,
} from '@chakra-ui/react';

export default function App() {
  const [stats, setStats] = useState({
    Strength: 5,
    Charisma: 5,
    Endurance: 5,
    Intelligence: 5,
    Agility: 5,
    Perception: 5,
    Luck: 5,
  });
  const [points, setPoints] = useState(5);
  const [isCharacterCreated, setIsCharacterCreated] = useState(false);

  useEffect(() => {
    const statsFromStorage = localStorage.getItem('characterStats');

    if (statsFromStorage) {
      setStats(JSON.parse(statsFromStorage));
      setIsCharacterCreated(true);
    }
  }, []);

  const updateStat = (statName, valueToPatch) => {
    const newStats = { ...stats };

    newStats[statName] = newStats[statName] + valueToPatch;
    setPoints(points - valueToPatch);

    setStats(newStats);
  };

  const isCounterButtonDisabled = (statValue, buttonType) => {
    if (statValue === 0 && buttonType === '-') {
      return true;
    }

    if (statValue === 10 && buttonType === '+') {
      return true;
    }

    if (points === 0 && buttonType === '+') {
      return true;
    }

    return false;
  };

  const createCharacter = () => {
    localStorage.setItem('characterStats', JSON.stringify(stats));
    setIsCharacterCreated(true);
  };

  const isCreateButtonDisabled = () => {
    return points !== 0 || isCharacterCreated;
  };

  const isFreePointsCounterShown = () => {
    return !isCharacterCreated;
  };

  return (
    <Box p="5">
      <Box border="1px" borderColor="gray.200" mb="5">
        <TableContainer>
          <Table size="sm" variant="simple">
            <Thead>
              <Tr>
                <Th>Stat</Th>
                <Th isNumeric>Value</Th>
              </Tr>
            </Thead>
            <Tbody>
              {Object.keys(stats).map((statName) => {
                return (
                  <Tr>
                    <Td>
                      <HStack spacing="2">
                        {!isCharacterCreated && (
                          <>
                            <Button
                              onClick={() => updateStat(statName, 1)}
                              isDisabled={isCounterButtonDisabled(
                                stats[statName],
                                '+'
                              )}
                              size="xs"
                              colorScheme="teal"
                            >
                              +
                            </Button>
                            <Button
                              onClick={() => updateStat(statName, -1)}
                              isDisabled={isCounterButtonDisabled(
                                stats[statName],
                                '-'
                              )}
                              size="xs"
                              colorScheme="red"
                            >
                              -
                            </Button>
                          </>
                        )}
                        <span>{statName}</span>
                      </HStack>
                    </Td>
                    <Td isNumeric>{stats[statName]}</Td>
                  </Tr>
                );
              })}
            </Tbody>
            {isFreePointsCounterShown() && (
              <TableCaption m="0">Free points left: {points}</TableCaption>
            )}
          </Table>
        </TableContainer>
      </Box>
      <Button
        onClick={() => createCharacter()}
        isDisabled={isCreateButtonDisabled()}
        size="md"
        colorScheme="teal"
        w="100%"
      >
        Create character
      </Button>
    </Box>
  );
}
