import { Colors, Terminal } from 'wglt';
import { Position } from '../components';
import { IWorld } from 'bitecs';
import { positionQuery } from '../queries';

const renderFPS = (term: Terminal): void => {
  term.drawString(
    0,
    0,
    'FPS: ' + term.fps.toFixed(0),
    Colors.WHITE,
    Colors.BLACK,
  );
  term.drawString(
    0,
    1,
    'Avg: ' + term.averageFps.toFixed(0),
    Colors.WHITE,
    Colors.BLACK,
  );
};

const renderEntities = (term: Terminal, entities: number[]): void => {
  for (let i = 0; i < entities.length; i++) {
    const eid = entities[i];
    const x = Position.x[eid];
    const y = Position.y[eid];
    term.drawString(x, y, '@', Colors.LIGHT_GREEN);
  }
};

const createRenderSystem = (term: Terminal) => {
  return (world: IWorld): IWorld => {
    term.clear();
    renderFPS(term);

    const entities = positionQuery(world);
    renderEntities(term, entities);

    return world;
  };
};

export { createRenderSystem };
