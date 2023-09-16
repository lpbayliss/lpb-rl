import { Position } from '../components';
import { playerPositionQuery } from '../queries';
import { IWorld } from 'bitecs';
import { SystemFn } from '.';

export enum MoveDirection {
  NORTH = 'NORTH',
  EAST = 'EAST',
  SOUTH = 'SOUTH',
  WEST = 'WEST',
}

export type MoveCommand = {
  direction: MoveDirection;
};

export const createMovementSystem = (): [SystemFn, MoveCommand[]] => {
  const moveBuffer: MoveCommand[] = [];

  const system = (world: IWorld): IWorld => {
    const queryResult = playerPositionQuery(world);
    if (queryResult.length !== 1) return world;
    const player = [0];
    while (moveBuffer.length) {
      const command = moveBuffer.pop();
      if (!command) continue;

      if (command.direction.match(MoveDirection.NORTH)) Position.y[player] -= 1;
      if (command.direction.match(MoveDirection.EAST)) Position.x[player] += 1;
      if (command.direction.match(MoveDirection.SOUTH)) Position.y[player] += 1;
      if (command.direction.match(MoveDirection.WEST)) Position.x[player] -= 1;
    }
    return world;
  };

  return [system, moveBuffer];
};
