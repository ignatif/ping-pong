import React from 'react';
import {
  Table,
  LeftHalf,
  Ball,
  Player,
} from './styled.js';

function PingPongTable() {
  return (
    <Table>
      <LeftHalf />
      <Ball />
      <Player left />
      <Player right />
    </Table>
  );
}

export default PingPongTable;
