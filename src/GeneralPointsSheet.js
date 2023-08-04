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

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

import { Input } from '@chakra-ui/react';

import StatDescription from './StatDescription.js';

export default function GeneralPointsSheet({
  isCharacterCreated,
  onCharacterCreation,
}) {
  const [stats, setStats] = useState({
    Strength: 0,
    Charisma: 0,
    Endurance: 0,
    Intelligence: 0,
    Agility: 0,
    Perception: 0,
    Luck: 0,
  });
  const [points, setPoints] = useState(28);
  const [isSelectedOrigin, setIsSelectedOrigin] = useState(false);
  const [modalCurrentStat, setModalCurrentStat] = useState(null);
  const [characterName, setCharacterName] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const characterDataFromStorage = localStorage.getItem('characterData');

    if (characterDataFromStorage) {
      const characterData = JSON.parse(characterDataFromStorage);

      setStats(characterData.stats);
      setCharacterName(characterData.characterName);
      onCharacterCreation();
    }
  }, []);

  const updateStat = (statName, valueToPatch) => {
    const newStats = { ...stats };
    const newStatValue = newStats[statName] + valueToPatch;

    newStats[statName] = newStatValue;
    setPoints(points - valueToPatch);
    setStats(newStats);

    if (newStatValue === 10) {
      setIsSelectedOrigin(true);
    }
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

    if (isSelectedOrigin && statValue === 9 && buttonType === '+') {
      return true;
    }

    return false;
  };

  const createCharacter = () => {
    onCharacterCreation();
    localStorage.setItem(
      'characterData',
      JSON.stringify({
        stats,
        characterName,
      })
    );
  };

  const isCreateButtonDisabled = () => {
    return points !== 0 || !characterName;
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
              <Tr>
                <Td colSpan="2">
                  <Input
                    type="text"
                    variant="filled"
                    placeholder="Character name"
                    value={characterName}
                    isDisabled={isCharacterCreated}
                    color="teal"
                    placeholder="Character Name"
                    _placeholder={{ color: 'inherit' }}
                    onChange={(event) => {
                      setCharacterName(event.target.value);
                    }}
                  />
                </Td>
              </Tr>
              {Object.keys(stats).map((statName) => {
                return (
                  <Tr key={statName}>
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
                        <Button
                          variant="ghost"
                          colorScheme="teal"
                          size="xs"
                          onClick={() => {
                            onOpen();
                            setModalCurrentStat(statName);
                          }}
                        >
                          {statName}
                        </Button>
                      </HStack>
                    </Td>
                    <Td isNumeric>{stats[statName]}</Td>
                  </Tr>
                );
              })}
            </Tbody>
            {!isCharacterCreated && (
              <TableCaption m="0">Free points left: {points}</TableCaption>
            )}
          </Table>
        </TableContainer>
      </Box>
      {!isCharacterCreated && (
        <Button
          onClick={() => createCharacter()}
          isDisabled={isCreateButtonDisabled()}
          size="md"
          colorScheme="teal"
          w="100%"
        >
          Create character
        </Button>
      )}
      <Modal size="full" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>{modalCurrentStat}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <StatDescription statName={modalCurrentStat} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
