import * as PIXI from 'pixi.js';
import { Filter, Texture } from 'pixi.js';
import Symbol475 from '../src/Symbols/Symbol475';
import Symbol476 from '../src/Symbols/Symbol476';
import Symbol478 from '../src/Symbols/Symbol478';
import Symbol479 from '../src/Symbols/Symbol479';
import Symbol488 from '../src/Symbols/Symbol488';
import Symbol489 from '../src/Symbols/Symbol489';
import Symbol490 from '../src/Symbols/Symbol490';
import Symbol491 from '../src/Symbols/Symbol491';
import Symbol493 from '../src/Symbols/Symbol493';
import Symbol494 from '../src/Symbols/Symbol494';
import Symbol495 from '../src/Symbols/Symbol495';
import Symbol496 from '../src/Symbols/Symbol496';
import Symbol497 from '../src/Symbols/Symbol497';
import Symbol498 from '../src/Symbols/Symbol498';
import Symbol503 from '../src/Symbols/Symbol503';
import Symbol504 from '../src/Symbols/Symbol504';
import Symbol505 from '../src/Symbols/Symbol505';
import Symbol506 from '../src/Symbols/Symbol506';
import Symbol507 from '../src/Symbols/Symbol507';
import Symbol508 from '../src/Symbols/Symbol508';
import Symbol509 from '../src/Symbols/Symbol509';
import Symbol510 from '../src/Symbols/Symbol510';
import Symbol513 from '../src/Symbols/Symbol513';
import Symbol516 from '../src/Symbols/Symbol516';
import Symbol517 from '../src/Symbols/Symbol517';
import Symbol541 from '../src/Symbols/Symbol541';
import Symbol542 from '../src/Symbols/Symbol542';
import Symbol543 from '../src/Symbols/Symbol543';
import Symbol544 from '../src/Symbols/Symbol544';
import Symbol545 from '../src/Symbols/Symbol545';
import Symbol546 from '../src/Symbols/Symbol546';
import Symbol846 from '../src/Symbols/Symbol846';
import Symbol847 from '../src/Symbols/Symbol847';
import Symbol848 from '../src/Symbols/Symbol848';
import Symbol849 from '../src/Symbols/Symbol849';
import Symbol851 from '../src/Symbols/Symbol851';
import Symbol854 from '../src/Symbols/Symbol854';
import Symbol855 from '../src/Symbols/Symbol855';
import Symbol856 from '../src/Symbols/Symbol856';
import Symbol857 from '../src/Symbols/Symbol857';
import Symbol858 from '../src/Symbols/Symbol858';
import Symbol859 from '../src/Symbols/Symbol859';
import Symbol860 from '../src/Symbols/Symbol860';
import Symbol861 from '../src/Symbols/Symbol861';
import Symbol862 from '../src/Symbols/Symbol862';
import Symbol863 from '../src/Symbols/Symbol863';
import Symbol864 from '../src/Symbols/Symbol864';
import Symbol865 from '../src/Symbols/Symbol865';
import Symbol866 from '../src/Symbols/Symbol866';
import Symbol867 from '../src/Symbols/Symbol867';
import Symbol868 from '../src/Symbols/Symbol868';
import Symbol869 from '../src/Symbols/Symbol869';
import Symbol870 from '../src/Symbols/Symbol870';
import Symbol871 from '../src/Symbols/Symbol871';
import Symbol875 from '../src/Symbols/Symbol875';
import Symbol876 from '../src/Symbols/Symbol876';
import Symbol877 from '../src/Symbols/Symbol877';
import Symbol878 from '../src/Symbols/Symbol878';
import Symbol879 from '../src/Symbols/Symbol879';
import Symbol880 from '../src/Symbols/Symbol880';
import { FramePart, Svg, Symbol } from '../src/common';
import ColorOffsetShader from './ColorOffsetShader';
import { PixiHelper } from './PixiHelper';

const bust = {
  male: Symbol504,
  female: Symbol862,
};

const animations = {
  male: {
    idle: Symbol475,
    monk: Symbol476,
    fist: Symbol478,
    arrive: Symbol479,
    ['hit-0']: Symbol488,
    ['hit-1']: Symbol489,
    ['hit-2']: Symbol490,
    run: Symbol491,
    equip: Symbol493,
    evade: Symbol494,
    block: Symbol495,
    trash: Symbol496,
    death: Symbol497,
    estoc: Symbol498,
    slash: Symbol503,
    throw: Symbol505,
    ['prepare-throw']: Symbol506,
    grab: Symbol507,
    steal: Symbol508,
    grabbed: Symbol509,
    stolen: Symbol510,
    trapped: Symbol513,
    drink: Symbol516,
    strengthen: Symbol517,
    whip: Symbol541,
    launch: Symbol542,
    win: Symbol543,
    train: Symbol544,
    train2: Symbol545,
    eat: Symbol546,
  },
  female: {
    idle: Symbol846,
    monk: Symbol847,
    fist: Symbol848,
    arrive: Symbol849,
    hit: Symbol851,
    run: Symbol854,
    equip: Symbol855,
    evade: Symbol856,
    block: Symbol857,
    trash: Symbol858,
    death: Symbol859,
    estoc: Symbol860,
    slash: Symbol861,
    throw: Symbol863,
    ['prepare-throw']: Symbol864,
    grab: Symbol865,
    steal: Symbol866,
    grabbed: Symbol867,
    stolen: Symbol868,
    trapped: Symbol869,
    drink: Symbol870,
    strengthen: Symbol871,
    whip: Symbol875,
    launch: Symbol876,
    win: Symbol877,
    train: Symbol878,
    train2: Symbol879,
    eat: Symbol880,
  },
};

const WEAPON_SYMBOL = 'Symbol68';
const SHIELD_SYMBOL = 'Symbol473';

const weaponFrames = [
  null,
  'knife',
  'broadsword',
  'lance',
  'baton',
  'trident',
  'hatchet',
  'scimitar',
  'axe',
  'sword',
  'fan',
  'shuriken',
  null,
  'bumps',
  'morningStar',
  'mammothBone',
  'flail',
  'whip',
  'sai',
  'leek',
  'mug',
  'fryingPan',
  'piopio',
  'halbard',
  'trumpet',
  'keyboard',
  'noodleBowl',
  'racquet',
];

type PartContainer = PIXI.Container & {
  source?: Symbol | Svg;
};

const SCALE = 2;

const app = new PIXI.Application<HTMLCanvasElement>({
  backgroundColor: 0xfbf7c0,
  width: 500,
  height: 300,
  antialias: true,
  autoDensity: true,
  resolution: window.devicePixelRatio,
});

document.body.appendChild(app.view);

const viewport = app.stage.addChild(new PIXI.Container());
app.renderer.render(app.stage);
app.stage.addChild(viewport);

let svgCount = 0;
let weaponMask: PIXI.Sprite | null = null;

const initializeParts = (
  bruteState: BruteState,
  parts: (Symbol | Svg)[],
  colorIdx?: number
) => {
  const partContainers: PartContainer[] = [];

  parts.forEach((part) => {
    const container: PartContainer = new PIXI.Container();
    container.name = part.name;
    container.source = part;
    container.visible = false;

    if (part.type === 'symbol') {
      if (part.parts) {
        const innerParts = initializeParts(bruteState, part.parts, part.colorIdx);
        if (innerParts.length) {
          container.addChild(...innerParts);
        }
      }
    }

    if (part.type === 'svg') {
      // Skip if we already have the weapon mask
      if (weaponMask && part.name === 'Symbol39') {
        return;
      }

      const svg = new PIXI.Sprite(Texture.from(part.svg));
      svg.scale.set(SCALE);
      svgCount++;

      // Apply offset
      if (part.offset) {
        svg.x = -(part.offset.x ?? 0) * SCALE;
        svg.y = -(part.offset.y ?? 0) * SCALE;
      }

      // Apply color
      if (colorIdx) {
        const color = bruteState.colorIdx[colorIdx - 1];
        if (!color) {
          throw new Error(`Color ${colorIdx} not found`);
        }

        svg.tint = parseInt(color.replace('#', ''), 16);
      }

      // Don't store weapon mask in the container, just keep it in memory
      if (part.name === 'Symbol39') {
        weaponMask = svg;
      } else {
        container.addChild(svg);
      }
    }

    partContainers.push(container);
  });

  return partContainers;
};

const getPartContainer = (parts: PIXI.DisplayObject[], type: 'symbol' | 'svg', name: string) => {
  return (parts as PartContainer[]).find(part => part.source?.type === type && part.name === name);
};

const displayPart = (parts: PIXI.DisplayObject[], part: FramePart) => {
  // Skip 39 as it's a mask
  if (part.name === 'Symbol39') {
    return;
  }

  const partContainer = getPartContainer(parts, part.type, part.name);

  if (!partContainer) {
    throw new Error(`Part ${part.type}:${part.name} not found`);
  }

  // Apply transform
  if (part.transform) {
    partContainer.transform.setFromMatrix(PixiHelper.matrixFromObject(part.transform, SCALE));
  }

  // Apply color offset
  if (part.colorOffset) {
    partContainer.filters = [new Filter(undefined, ColorOffsetShader, {
      offset: new Float32Array([
        part.colorOffset.r ?? 0,
        part.colorOffset.g ?? 0,
        part.colorOffset.b ?? 0
      ]),
      mult: new Float32Array([1, 1, 1])
    })];
  }

  // Apply alpha
  if (part.alpha) {
    partContainer.alpha = part.alpha;
  }

  // Apply masking
  if (part.maskedBy) {
    if (!weaponMask) {
      throw new Error(`Weapon mask not found`);
    }

    partContainer.addChild(weaponMask);
    partContainer.mask = weaponMask;
  }

  // Apply visibility
  partContainer.visible = true;

  // Handle children
  const source = partContainer.source;
  if (!source) {
    throw new Error(`Part ${part.type}:${part.name} has no source`);
  }

  let frameToDisplay = 0;

  // Select correct weapon frame
  if (source.type === 'symbol' && source.name === WEAPON_SYMBOL) {
    const weaponFrame = weaponFrames.findIndex(weapon => weapon === bruteState.weapon);
    if (weaponFrame >= 0) {
      frameToDisplay = weaponFrame;
    }
  }

  // Hide shield if needed
  if (source.type === 'symbol' && source.name === SHIELD_SYMBOL) {
    partContainer.visible = bruteState.shield;
  }

  // Display correct part
  if (partContainer.source?.type === 'symbol' && partContainer.source.partIdx) {
    const partIdx = bruteState.partIdx[partContainer.source.partIdx - 1];

    if (partIdx === undefined) {
      throw new Error(`Part ${partContainer.source.partIdx} not found`);
    }

    frameToDisplay = partIdx;
  }

  if (source.type === 'symbol' && source.frames?.[frameToDisplay]) {
    source.frames?.[frameToDisplay].forEach(childPart => {
      displayPart(partContainer.children as PIXI.DisplayObject[], childPart);
    });
  }
};

const displaySymbol = (bruteState: BruteState, x?: number, y?: number) => {
  // TODO: Memo each possible part instead of initializing them each time
  const symbolContainer = new PIXI.Container();
  symbolContainer.name = bruteState.animation;
  symbolContainer.x = x ?? 0;
  symbolContainer.y = y ?? 0;

  // Get animation symbol
  const symbol = animations[bruteState.gender][bruteState.animation] as Symbol | undefined;

  if (!symbol) {
    throw new Error(`Animation ${bruteState.animation} not found`);
  }

  // Initialize all parts
  if (symbol.parts) {
    symbolContainer.addChild(...initializeParts(bruteState, symbol.parts));
  }

  symbol.frames?.[bruteState.frame].forEach(part => {
    displayPart(symbolContainer.children, part);
  });

  return symbolContainer;
};

type BruteState = {
  animation: string;
  frame: number;
  gender: 'male' | 'female';
  shield: boolean;
  weapon: string | null;
  colorIdx: string[];
  partIdx: number[];
};

const bruteState: BruteState = {
  animation: 'win',
  frame: 54,
  gender: 'male',
  shield: false,
  weapon: 'morningStar',
  colorIdx: [
    '#ff0000', // Hair
    '#00ff00', // ?
    '#0000ff', // ?
    '#ffff00', // ?
  ],
  partIdx: [
    0, // ?
    0, // Biceps strength
    1, // Hair
    1, // Beard
    0, // ?
    0, // ?
    0, // ?
    0, // ?
  ],
};

const symbol = displaySymbol(bruteState, 200, 200);

console.log(`SVG count: ${svgCount}`);

viewport.addChild(symbol);