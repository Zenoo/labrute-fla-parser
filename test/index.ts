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

const loadSvgs = (bruteState: BruteState, symbolContainer: PIXI.Container, svgs: SvgsToLoad) => {
  const loadedSvgs: PIXI.Sprite[] = [];

  for (const svgToLoad of svgs) {
    const svg = svgToLoad.svg;

    for (let i = 0; i < svgToLoad.count; i++) {
      // Custom scale
      let customScale = svg.scale ?? 1;
      const size = SCALE * (bruteState.type === 'panther' ? 1.5 : 1);
  
      // Special case for pets
      if (bruteState.type === 'dog' || bruteState.type === 'bear' || bruteState.type === 'panther') {
        customScale = 4;
      }
  
      const svgSprite = new PIXI.Sprite(Texture.from(svg.svg, {
        resourceOptions: { scale: size * customScale }
      }));
      svgSprite.name = svg.name;
      svgSprite.scale.set(1 / customScale);
      svgSprite.visible = false;
      svgCount++;
  
      // Apply offset
      if (svg.offset) {
        svgSprite.x = -(svg.offset.x ?? 0) * size;
        svgSprite.y = -(svg.offset.y ?? 0) * size;
      }

      symbolContainer.addChild(svgSprite);
      loadedSvgs.push(svgSprite);
    }
  }

  return loadedSvgs;
};

type SvgsToLoad = {
  svg: Svg;
  count: number;
}[];

const initializeContainersAndGetSvgsToLoad = (
  bruteState: BruteState,
  baseContainer: PIXI.Container,
  symbol: Symbol | Svg,
  symbolContainer: PIXI.Container,
) => {
  // SVG
  if (symbol.type === 'svg') {
    return [{
      svg: symbol,
      count: 1,
    }];
  } else {
    // Symbol
    
    // Don't create a container if we're at the root
    let container: PIXI.Container;
    if (symbol.name === baseContainer.name) {
      container = baseContainer;
    } else {
      container = new PIXI.Container();
      container.name = symbol.name;
      container.visible = false;
  
      symbolContainer.addChild(container);
    }

    // Get frames to load
    let framesToLoad: number[] = [];

    // If symbol has partIdx, only load the corresponding frame
    if (symbol.partIdx) {
      const partValue = bruteState.parts[symbol.partIdx];

      if (partValue === undefined) {
        throw new Error(`Part ${symbol.partIdx} not found in fighter config`);
      }

      framesToLoad = [partValue];
    } else if (symbol.name === WEAPON_SYMBOL) {
      // Load all weapon frames
      framesToLoad = weaponFrames.map((_, i) => i);
    } else if (symbol.name === baseContainer.name) {
      // Load all frames since they represent the whole animation
      framesToLoad = symbol.frames?.map((_, i) => i) ?? [];
    } else {
      // Load only the first frame
      framesToLoad = [0];
    }

    // For each frame, load the corresponding SVGs
    const svgs: SvgsToLoad = [];
    for (const frameIdx of framesToLoad) {
      const frame = symbol.frames?.[frameIdx];
      if (!frame) {
        throw new Error(`Frame ${frameIdx} not found in symbol ${symbol.name}`);
      }

      const frameSvgs: SvgsToLoad = [];

      // Load frame parts
      for (const part of frame) {
        const correspondingSymbol = symbol.parts?.find(p => p.name === part.name);

        if (!correspondingSymbol) {
          throw new Error(`Part ${part.name} not found in symbol ${symbol.name}`);
        }

        const partSvgs = initializeContainersAndGetSvgsToLoad(bruteState, baseContainer, correspondingSymbol, container);

        // Merge svgs
        for (const svg of partSvgs) {
          const existingSvg = frameSvgs.find(s => s.svg.name === svg.svg.name);
          if (!existingSvg) {
            frameSvgs.push(svg);
          } else {
            existingSvg.count = Math.max(existingSvg.count, svg.count);
          }
        }
      }

      // Update svgs
      for (const svg of frameSvgs) {
        const existingSvg = svgs.find(s => s.svg.name === svg.svg.name);
        if (!existingSvg) {
          svgs.push(svg);
        } else {
          existingSvg.count = Math.max(existingSvg.count, svg.count);
        }
      }
    }

    return svgs;
  }
};

const displayFrame = (
  bruteState: BruteState,
  baseContainer: PIXI.Container,
  loadedSvgs: PIXI.Sprite[],
  symbolContainer: PIXI.Container,
  symbol: Symbol | Svg,
  colorIdx?: string,
) => {
  console.log('--------')
  console.log(loadedSvgs);
  console.log(symbolContainer);
  console.log(symbol);
  if (symbol.type === 'svg') {
    const sprite = loadedSvgs.find(s => s.name === symbol.name);
    
    if (!sprite) {
      throw new Error(`Sprite ${symbol.name} not found`);
    }

    // Apply color
    if (colorIdx) {
      const color = bruteState.colors[colorIdx];
      if (!color) {
        throw new Error(`Color ${colorIdx} not found`);
      }

      sprite.tint = parseInt(color.replace('#', ''), 16);
    }

    // Add to current container
    sprite.visible = true;
    symbolContainer.addChild(sprite);
  } else {
    const usedSymbols: string[] = [];

    // Get frame to load
    let frameToLoad: number;
  
    // If symbol has partIdx, only load the corresponding frame
    if (symbol.partIdx) {
      const partValue = bruteState.parts[symbol.partIdx];
  
      if (partValue === undefined) {
        throw new Error(`Part ${symbol.partIdx} not found in fighter config`);
      }
  
      frameToLoad = partValue;
    } else if (symbol.name === WEAPON_SYMBOL) {
      // Load current weapon frame
      frameToLoad = weaponFrames.indexOf(bruteState.weapon);
    } else if (symbol.name === baseContainer.name) {
      // Load defined frame
      frameToLoad = bruteState.frame;
    } else {
      // Load only the first frame
      frameToLoad = 0;
    }

    console.log(`Frame to load: ${frameToLoad}`)

    const frameParts = symbol.frames?.[frameToLoad] ?? [];

    for (let i = 0; i < frameParts.length; i++) {
      const framePart = frameParts[i];

      console.log(`Frame part ${i}: ${framePart.name}`);

      // Count identic symbols already used
      const identicSymbolsCount = usedSymbols.filter(s => s === framePart.name).length;

      console.log(`Identical symbols count: ${identicSymbolsCount}`);

      // Get corresponding symbol
      const framePartSymbol = symbol.parts?.filter(p => p.name === framePart.name)[identicSymbolsCount];

      if (!framePartSymbol) {
        throw new Error(`Part ${framePart.name} not found in symbol ${symbol.name}`);
      }
      if (framePartSymbol.type !== 'symbol') {
        throw new Error(`Part ${framePart.name} is not a symbol`);
      }

      console.log('symbol container children: ', symbolContainer.children.map(c => c.name).join(', '));

      // Get corresponding container
      const framePartContainer = symbolContainer.children.find((child) => child instanceof PIXI.Container && child.name === framePart.name) as PIXI.Container | undefined;

      if (!framePartContainer) {
        throw new Error(`Container ${framePart.name} not found`);
      }

      // Apply transform
      if (framePart.transform) {
        const size = SCALE * (bruteState.type === 'panther' ? 1.5 : 1);
        framePartContainer.transform.setFromMatrix(PixiHelper.matrixFromObject(framePart.transform, size));
      }

      // Apply color offset
      if (framePart.colorOffset) {
        if (bruteState.type === 'panther') {
          framePartContainer.filters = [new Filter(undefined, ColorOffsetShader, {
            offset: new Float32Array([-82, -97, -82]),
            mult: new Float32Array([1, 1, 1])
          })];
        } else {
          framePartContainer.filters = [new Filter(undefined, ColorOffsetShader, {
            offset: new Float32Array([
              framePart.colorOffset.r ?? 0,
              framePart.colorOffset.g ?? 0,
              framePart.colorOffset.b ?? 0
            ]),
            mult: new Float32Array([1, 1, 1])
          })];
        }
      }

      // Apply alpha
      if (framePart.alpha) {
        framePartContainer.alpha = framePart.alpha;
      }

      // Apply masking
      if (framePart.maskedBy) {
        // Get mask sprite
        const maskSprite = baseContainer.children.find((child) => child instanceof PIXI.Sprite && child.name === `Symbol${framePart.maskedBy}`) as PIXI.Sprite | undefined;
        if (!maskSprite) {
          throw new Error(`Mask sprite Symbol${framePart.maskedBy} not found`);	
        }
    
        framePartContainer.addChild(maskSprite);
        framePartContainer.mask = maskSprite;
      }

      // Apply visibility
      framePartContainer.visible = true;

      // Handle children
      framePartSymbol.parts?.forEach((part) => {
        displayFrame(bruteState, baseContainer, loadedSvgs, framePartContainer, part, colorIdx ?? symbol.colorIdx);
      });
    }
  }
};

const displayFighter = (bruteState: BruteState, x?: number, y?: number) => {
  const type = bruteState.type === 'panther' ? 'dog' : bruteState.type;

  // Get animation symbol
  const symbol = animations[type][bruteState.animation] as Symbol | undefined;
  // const symbol = Symbol285;

  if (!symbol) {
    throw new Error(`Animation ${bruteState.animation} not found`);
  }
  const symbolContainer = new PIXI.Container();
  symbolContainer.name = symbol.name;
  symbolContainer.x = x ?? 0;
  symbolContainer.y = y ?? 0;

  const svgs = initializeContainersAndGetSvgsToLoad(bruteState, symbolContainer, symbol, symbolContainer);

  // Load SVGs
  const loadedSvgs = loadSvgs(bruteState, symbolContainer, svgs);

  // Display frame
  displayFrame(bruteState, symbolContainer, loadedSvgs, symbolContainer, symbol);

  return {
    container: symbolContainer,
    svgs,
  };
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
  frame: 2,
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

const fighter = displayFighter(bruteState, 200, 200);

console.log(`SVG count: ${svgCount}`);

viewport.addChild(fighter.container);

console.log(svgCount);