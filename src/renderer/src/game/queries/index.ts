import { defineQuery } from 'bitecs';
import { Player, Position } from '../components';

export const positionQuery = defineQuery([Position]);
export const playerPositionQuery = defineQuery([Player, Position]);
