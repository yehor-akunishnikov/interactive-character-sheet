import React from 'react';

import { VStack, Box } from '@chakra-ui/react';
import { Divider, Badge } from '@chakra-ui/react';

export default function StatDescription({ statName }) {
  switch (statName) {
    case 'Strength':
      return <Strength />;
    case 'Charisma':
      return <Charisma />;
    case 'Endurance':
      return <Endurance />;
    case 'Intelligence':
      return <Intelligence />;
    case 'Agility':
      return <Agility />;
    case 'Perception':
      return <Perception />;
    case 'Luck':
      return <Luck />;
    default:
      return '';
  }
}

function Strength() {
  return (
    <>
      <VStack spacing="2" alignItems="flex-start">
        <p>Strength - male weapons, carry weight.</p>
        <Divider />
        <p>
          <Badge colorScheme="red">Each 3 points</Badge> of strength grant{' '}
          <Badge colorScheme="red">5 HP</Badge> points (basic HP is 10).
        </p>
        <Divider />
        <p>
          <Badge colorScheme="red">After 5 lvl</Badge> of strength character
          gains buff for the male attacks (
          <Badge colorScheme="red">+1 for each lvl</Badge>).
        </p>
        <Divider />
        <p>
          <Badge colorScheme="red">Each 3 points</Badge> of strength grant{' '}
          <Badge colorScheme="red">10 carry weight</Badge> points (basic carry
          weight points are 15).
        </p>
      </VStack>
    </>
  );
}

function Charisma() {
  return (
    <>
      <VStack spacing="2" alignItems="flex-start">
        <p>Charisma - speach, barter, flirt.</p>
        <Divider />
        <p>
          <Badge colorScheme="purple">10 lvl</Badge> of charisma provides with
          an abillity to solve any fight using speach or flirt (
          <Badge colorScheme="purple">difficulty 16</Badge>).
        </p>
      </VStack>
    </>
  );
}

function Endurance() {
  return (
    <>
      <VStack spacing="2" alignItems="flex-start">
        <p>
          <Badge colorScheme="orange">Each 3 points</Badge> of endurance grant{' '}
          <Badge colorScheme="orange">+1 passive armor point</Badge>. Armor
          points affect an amount of damage retrieved during combat. Each armor
          point reduces retrieved damage by 10%.
        </p>
        <Divider />
        <p>
          <Badge colorScheme="orange">10 lvl of endurance</Badge> grant 50%
          damage resist
        </p>
        <Divider />
        <p>
          <Badge colorScheme="orange">Each 3 points</Badge> of endurance grant{' '}
          <Badge colorScheme="orange">1 death point</Badge> (basic death points
          for each character are 3). If character is knocked out in a fight he
          looses 1 death point after each round of fight. If character looses
          all Death Points during a fight - he dies. Death points could be
          restored after the long break, or using first aid.
        </p>
        <Divider />
        <p>
          <Badge colorScheme="orange">10 lvl of</Badge> of endurance provides
          character with an abillity to return to fight with 30% of his max HP
          (requires direct check of endurance difficulty 16, 1 attempt for
          fight).
        </p>
      </VStack>
    </>
  );
}

function Intelligence() {
  return (
    <>
      <VStack spacing="2" alignItems="flex-start">
        <p>
          <Badge colorScheme="blue">Each 5 points</Badge> of intelligence grant
          access to new teer of magic (spells should be learned 2 spells default
          pool, learning requires direct intelligence check).
        </p>
        <Divider />
        <p>
          Manna pool depends on the intelligence level: 5 - 10MP. 6 - 15MP. 7 -
          20MP. 8 - 25MP. 9 - 30MP. 10 - 50MP. Manna points could be restored by
          mana potions or a long break. Mana potion restores 0 - 10 MP. 10 lvl
          grants access to big mana potion brewing technique which restores 10 -
          20MP.
        </p>
        <Divider />
        <p>
          Brewing skill is available if intelligence is{' '}
          <Badge colorScheme="blue"> 3 or higher</Badge>. Brewing requires
          additive ingedients and intelligence check which determines
          effectivity of the potion.
        </p>
        <Divider />
        <Box>
          <p>
            <Badge colorScheme="blue">1 Teer spels</Badge>
          </p>
          <ul>
            <li>
              Roots binding - enemy looses an abillity to move for one round{' '}
              <Badge colorScheme="blue">3 MP</Badge>.
            </li>
            <li>
              Healing touch - restores health by 2 HP{' '}
              <Badge colorScheme="blue">4 MP</Badge>.
            </li>
            <li>
              Fireball - deals 2 damage at once and 1 damage at the start of the
              next 2 rounds <Badge colorScheme="blue">5 MP</Badge>.
            </li>
            <li>
              Magic shield - blocks 50% of damage for 2 rounds{' '}
              <Badge colorScheme="blue">6 MP</Badge>.
            </li>
            <li>
              Third eye - grants 2 point buff for the next perception check
              <Badge colorScheme="blue">5 MP</Badge>.
            </li>
          </ul>
        </Box>
        <Divider />
        <Box>
          <p>
            <Badge colorScheme="blue">2 Teer spells</Badge>
          </p>
          <ul>
            <li>
              Killing curse - enemy dies after 3 rounds{' '}
              <Badge colorScheme="blue">15MP</Badge>.
            </li>
            <li>
              Fiendfyre - summons living fire, that strikes all enemys at the
              start of the each round. Deals 3 damage.{' '}
              <Badge colorScheme="blue">15 MP</Badge>.
            </li>
            <li>
              Mana vampirism - you can finish enemy if his HP is 20% or lower
              and get MP amount depending on additive intelligence check{' '}
              <Badge colorScheme="blue">5 MP</Badge>.
            </li>
            <li>
              Bombarda - Explosive spell, which deals 10HP damage to enemies
              standing nearby. Could be used to destroy obstacles{' '}
              <Badge colorScheme="blue">15 MP</Badge>.
            </li>
            <li>
              Mind trick - causes enemy to fight against his group for 3 rounds
              <Badge colorScheme="blue">10 MP</Badge>.
            </li>
          </ul>
        </Box>
      </VStack>
    </>
  );
}

function Agility() {
  return (
    <>
      <VStack spacing="2" alignItems="flex-start">
        <p>Agility - acrobatics, thief, range weapons.</p>
      </VStack>
    </>
  );
}

function Perception() {
  return (
    <>
      <VStack spacing="2" alignItems="flex-start">
        <p>Perception - first aid, lockpick, traps, sneak, investigation.</p>
      </VStack>
    </>
  );
}

function Luck() {
  return (
    <>
      <VStack spacing="2" alignItems="flex-start">
        <p>
          Luck - requires coin flip instead of D20 for any check.{' '}
          <Badge colorScheme="yellow">Each 3 points</Badge> of luck gives retry
          attempt.
        </p>
        <Divider />
        <p>
          <Badge colorScheme="yellow">10 points</Badge> of luck gives an
          abillity to duel with gamemaster.
        </p>
        <Divider />
        <p>
          Duels: Rock-paper-scissors, greater number, call more items in 10 sec.
        </p>
        <p>
          <Badge colorScheme="yellow">Duel win grants extra luck effect</Badge>{' '}
          (success + additive buffs depending on situation).
        </p>
        <p>
          <Badge colorScheme="yellow">Duel loose grants bad luck effect</Badge>{' '}
          (failure with additive debuffs depending on situation).
        </p>
      </VStack>
    </>
  );
}
