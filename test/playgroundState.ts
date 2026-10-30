import type { Animation, FighterAppearance, FighterModel, WeaponName } from '../src/Symbols';
import { readBodyString, readColorString } from './utils';

export type PreviewModel = FighterModel | 'panther';

/** Editable form state, kept separate from Pixi objects and DOM elements. */
export interface PlaygroundState {
  model: PreviewModel;
  team: 'L' | 'R';
  scale: number;
  animation: Animation;
  weapon: WeaponName | null;
  shield: boolean;
  parts: Record<string, number>;
  colors: Record<string, string>;
  colorString: string;
}

export function isBrute(model: PreviewModel): model is 'male' | 'female' {
  return model === 'male' || model === 'female';
}

export function animationModel(model: PreviewModel): FighterModel {
  return model === 'panther' ? 'dog' : model;
}

export function defaultState(model: PreviewModel): PlaygroundState {
  const gender = model === 'female' ? 'female' : 'male';
  const body = gender === 'female' ? '00100100610' : '01013100611';
  const colorString =
    gender === 'female' ? '01010103030303030701021915180706' : '03030301010101010803151401191418';

  return {
    model,
    team: 'L',
    scale: 2,
    animation: 'idle',
    weapon: 'sword',
    shield: false,
    parts: readBodyString(body),
    colors: readColorString(gender, colorString),
    colorString,
  };
}

/** Translate playground choices into the renderer's resolved appearance format. */
export function fighterAppearance(state: PlaygroundState): FighterAppearance {
  const model = animationModel(state.model);
  const brute = isBrute(state.model);

  return {
    type: brute ? 'brute' : 'pet',
    name: state.model,
    model,
    team: state.team,
    shield: brute && state.shield,
    parts: state.parts,
    colors: state.colors,
    width: brute ? 50 : model === 'bear' ? 100 : 58,
    height: brute ? 80 : model === 'bear' ? 100 : 40,
    colorOffset: state.model === 'panther' ? { r: -82, g: -97, b: -82 } : undefined,
  };
}
