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
import Symbol894 from '../src/Symbols/Symbol894';
import Symbol903 from '../src/Symbols/Symbol903';
import Symbol904 from '../src/Symbols/Symbol904';
import Symbol905 from '../src/Symbols/Symbol905';
import Symbol906 from '../src/Symbols/Symbol906';
import Symbol907 from '../src/Symbols/Symbol907';
import Symbol910 from '../src/Symbols/Symbol910';
import Symbol911 from '../src/Symbols/Symbol911';
import Symbol912 from '../src/Symbols/Symbol912';
import Symbol913 from '../src/Symbols/Symbol913';
import Symbol935 from '../src/Symbols/Symbol935';
import Symbol936 from '../src/Symbols/Symbol936';
import Symbol937 from '../src/Symbols/Symbol937';
import Symbol938 from '../src/Symbols/Symbol938';
import Symbol939 from '../src/Symbols/Symbol939';
import Symbol940 from '../src/Symbols/Symbol940';
import Symbol941 from '../src/Symbols/Symbol941';
import Symbol942 from '../src/Symbols/Symbol942';
import Symbol943 from '../src/Symbols/Symbol943';
import Symbol944 from '../src/Symbols/Symbol944';
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
  dog: {
    idle: Symbol894,
    attack: Symbol903,
    arrive: Symbol904,
    hit: Symbol905,
    run: Symbol906,
    evade: Symbol907,
    death: Symbol910,
    grab: Symbol911,
    grabbed: Symbol912,
    trapped: Symbol913,
  },
  bear: {
    idle: Symbol935,
    attack: Symbol936,
    arrive: Symbol937,
    hit: Symbol938,
    run: Symbol939,
    evade: Symbol940,
    death: Symbol941,
    grab: Symbol942,
    grabbed: Symbol943,
    trapped: Symbol944,
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

const SCALE = 1;

const app = new PIXI.Application<HTMLCanvasElement>({
  backgroundColor: 0xfbf7c0,
  width: 500,
  height: 300,
  antialias: true,
  autoDensity: true,
  resolution: window.devicePixelRatio,
});

document.body.appendChild(app.view);
document.body.style.backgroundColor = '#333';

const viewport = app.stage.addChild(new PIXI.Container());
app.renderer.render(app.stage);
app.stage.addChild(viewport);

let svgCount = 0;
let weaponMask: PIXI.Sprite | null = null;

const initializeParts = (
  bruteState: BruteState,
  parts: (Symbol | Svg)[],
  colorIdx?: string,
) => {
  const partContainers: PartContainer[] = [];

  parts.forEach((part) => {
    const container: PartContainer = new PIXI.Container();
    container.name = part.name;
    container.source = part;
    container.visible = false;

    if (part.type === 'symbol') {
      if (part.parts) {
        const innerParts = initializeParts(bruteState, part.parts, part.colorIdx ?? colorIdx);
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

      // Custom scale
      let customScale = part.scale ?? 1;
      const size = SCALE * (bruteState.type === 'panther' ? 1.5 : 1);

      // Special case for pets
      if (bruteState.type === 'dog' || bruteState.type === 'bear' || bruteState.type === 'panther') {
        customScale = 4;
      }

      const svg = new PIXI.Sprite(Texture.from(part.svg, {
        resourceOptions: { scale: size * customScale }
      }));
      svg.scale.set(1 / customScale);
      svgCount++;

      // Apply offset
      if (part.offset) {
        svg.x = -(part.offset.x ?? 0) * size;
        svg.y = -(part.offset.y ?? 0) * size;
      }

      // Apply color
      if (colorIdx) {
        const color = bruteState.colors[colorIdx];
        if (!color) {
          throw new Error(`Color ${colorIdx} not found`);
        }

        if (part.name === 'Symbol566') {
          console.log(color);
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

const getPartContainer = (
  parts: PIXI.DisplayObject[],
  type: 'symbol' | 'svg',
  name: string,
  twinIndex: number,
) => {
  return (parts as PartContainer[]).filter(part => part.source?.type === type && part.name === name)[twinIndex];
};

const displayPart = (bruteState: BruteState, parts: PIXI.DisplayObject[], part: FramePart, twinIndex: number) => {
  // Skip 39 as it's a mask
  if (part.name === 'Symbol39') {
    return;
  }

  const partContainer = getPartContainer(parts, part.type, part.name, twinIndex);

  if (!partContainer) {
    throw new Error(`Part ${part.type}:${part.name} not found`);
  }

  // Apply transform
  if (part.transform) {
    const size = SCALE * (bruteState.type === 'panther' ? 1.5 : 1);
    partContainer.transform.setFromMatrix(PixiHelper.matrixFromObject(part.transform, size));
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
    const partIdx = bruteState.parts[partContainer.source.partIdx];

    if (partIdx === undefined) {
      throw new Error(`Part ${partContainer.source.partIdx} not found`);
    }

    frameToDisplay = partIdx;
  }

  if (source.type === 'symbol' && source.frames?.[frameToDisplay]) {
    source.frames?.[frameToDisplay].forEach(childPart => {
      // Get amount of same symbols
      const twinParts = source.frames?.[frameToDisplay].filter(part => part.name === childPart.name && part.type === childPart.type);

      displayPart(bruteState, partContainer.children as PIXI.DisplayObject[], childPart, (twinParts?.length || 0) - 1);
    });
  }
};

const displaySymbol = (bruteState: BruteState, x?: number, y?: number) => {
  // TODO: Memo each possible part instead of initializing them each time
  const symbolContainer = new PIXI.Container();
  symbolContainer.name = bruteState.animation;
  symbolContainer.x = x ?? 0;
  symbolContainer.y = y ?? 0;

  const type = bruteState.type === 'panther' ? 'dog' : bruteState.type;

  // Get animation symbol
  const symbol = animations[type][bruteState.animation] as Symbol | undefined;
  // const symbol = Symbol285;

  if (!symbol) {
    throw new Error(`Animation ${bruteState.animation} not found`);
  }

  // Initialize all parts
  if (symbol.parts) {
    symbolContainer.addChild(...initializeParts(bruteState, symbol.parts));
  }

  symbol.frames?.[bruteState.frame]?.forEach(part => {
    // Get amount of same symbols
    const twinParts = symbol.frames?.[bruteState.frame].filter(p => p.name === part.name && p.type === part.type);

    displayPart(bruteState, symbolContainer.children, part, (twinParts?.length || 0) - 1);
  });

  // TODO: Add filter to replace color by grey if panther
  if (bruteState.type === 'panther') {
    symbolContainer.filters = [new Filter(undefined, ColorOffsetShader, {
      offset: new Float32Array([-82, -97, -82]),
      mult: new Float32Array([1, 1, 1])
    })];
  }

  return symbolContainer;
};

type BruteState = {
  animation: string;
  frame: number;
  type: 'male' | 'female' | 'dog' | 'bear' | 'panther';
  shield: boolean;
  weapon: string | null;
  colors: Record<string, string>;
  parts: Record<string, number>;
};

const bruteState: BruteState = {
  animation: 'idle',
  frame: 0,
  type: 'panther',
  shield: false,
  weapon: 'axe',
  colors: {
    _col0: '#eaaca6',  // Skin
    _col0a: '#eaaca6',  // Face
    _col0c: '#eaaca6',  // Ear
    _col1: '#ffaa1e',  // Hair
    _col1a: '#ffaa1e', // Hair back
    _col1b: '#ffaa1e', // Hair back 2
    _col1c: '#ffaa1e', // Hair front
    _col1d: '#ffaa1e', // Eyebrows
    _col3: '#bb1111',  // Primary (includes eyes)
    _col2: '#8ba3d7',  // Secondary
    _col2b: '#7a73c8', // Accent 1
    _col3b: '#fae31f', // Accent 2
    _col2a: '#fff9ae', // Accent 3
    _col4: '#559399',  // Shirt
    _col4a: '#00ff00', // Shoes accent ?
    _col4b: '#0000ff', // ??
  },
  parts: {
    _p2: 7,  // Body size (small = 0, big = 7)
    _p3: 5,  // Hair [0-11] 12 = no head
    _p4: 3,  // (male) Beard [0-4] 5 = nothing / (female) Front hair [0-2] 3 = nothing
    _p7: 0,  // Main clothing [0-6] 7 = naked
    _p1: 0,  // Armor variation [0-1]
    _p1a: 0, // [0-1] 0=belt, 1=nothing
    _p1b: 0, // 0=roman belt, 1=nothing
    _p6: 0,  // (male) 0=shorts, 1=trousers / (female) 0=shorts, 1=nothing
    _p8: 0,  // [0-4] Supposed to be shoes but doesn't change anything ??
    _p7b: 2, // Shoes underside (2 = visible, others = hidden)
    _p5: 0,  // ?? broken after 0
  },
};

const symbol = displaySymbol(bruteState, 200, 200);

console.log(`SVG count: ${svgCount}`);

viewport.addChild(symbol);

// TODO: bear and dog are missing parts