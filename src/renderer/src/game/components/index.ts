import { defineComponent, Types } from 'bitecs';

export const Vector2 = { x: Types.f32, y: Types.f32 };
export const Position = defineComponent(Vector2);
export const Player = defineComponent();
