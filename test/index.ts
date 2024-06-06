import * as PIXI from 'pixi.js';
import { Filter, Texture } from 'pixi.js';
import { Symbol475, Symbol476, Symbol478, Symbol479, Symbol488, Symbol489, Symbol490, Symbol491, Symbol493, Symbol494, Symbol495, Symbol496, Symbol497, Symbol498, Symbol503, Symbol504, Symbol505, Symbol506, Symbol507, Symbol508, Symbol509, Symbol510, Symbol513, Symbol516, Symbol517, Symbol541, Symbol542, Symbol543, Symbol544, Symbol545, Symbol546, Symbol846, Symbol847, Symbol848, Symbol849, Symbol851, Symbol854, Symbol855, Symbol856, Symbol857, Symbol858, Symbol859, Symbol860, Symbol861, Symbol862, Symbol863, Symbol864, Symbol865, Symbol866, Symbol867, Symbol868, Symbol869, Symbol870, Symbol871, Symbol875, Symbol876, Symbol877, Symbol878, Symbol879, Symbol880, Symbol894, Symbol903, Symbol904, Symbol905, Symbol906, Symbol907, Symbol910, Symbol911, Symbol912, Symbol913, Symbol935, Symbol936, Symbol937, Symbol938, Symbol939, Symbol940, Symbol941, Symbol942, Symbol943, Symbol944 } from '../src/Symbols';
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

const loopStart = {
  male: {
    idle: 0,
    monk: 6,
    run: 0,
    death: 24,
    trapped: 11,
    train: 0,
    train2: 0,
  },
  female: {
    idle: 0,
    monk: 12,
    run: 0,
    death: 24,
    trapped: 11,
    train: 0,
    train2: 0,
  },
  dog: {
    idle: 0,
    run: 0,
    evade: 0,
    trapped: 11,
  },
  bear: {
    idle: 0,
    run: 0,
    trapped: 11,
  },
};

const animationSymbolNames = {
  male: Object.values(animations.male).map(a => a.name),
  female: Object.values(animations.female).map(a => a.name),
  dog: Object.values(animations.dog).map(a => a.name),
  bear: Object.values(animations.bear).map(a => a.name),
};

const WEAPON_SYMBOL = 'Symbol68';
const SHIELD_SYMBOL = {
  male: 'Symbol472',
  female: 'Symbol472',
};

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
viewport.sortableChildren = true;
app.renderer.render(app.stage);
app.stage.addChild(viewport);

type SvgsToLoad = {
  svg: Svg;
  count: number;
}[];

class Fighter {
  // Setup data
  readonly type: 'male' | 'female' | 'dog' | 'panther' | 'bear';
  readonly #colors: Record<string, string> = {};
  readonly #parts: Record<string, number> = {};

  // Those can change mid-fight
  animation: string = 'idle';
  shield: boolean = false;
  weapon: string | null = null;
  
  // PIXI
  readonly container: PIXI.Container;
  #animationContainer: PIXI.Container;
  #animationSymbol: Symbol;

  #playing: boolean = true;
  #frame: number = 0;
  #timer: number = 0;
  svgs: PIXI.Sprite[] = [];
  #tickRate = 1000 / 24;
  #frameCount = 0;
  #usedSvgs: Record<string, number> = {};
  
  // Events
  events: Record<string, ((event: string) => void)[]> = {};
  onceEvents: Record<string, ((event: string) => void)[]> = {};

  constructor(bruteState: BruteState, x?: number, y?: number) {
    this.type = bruteState.type;
    this.animation = bruteState.animation;
    this.shield = bruteState.shield;
    this.weapon = bruteState.weapon;
    this.#colors = bruteState.colors;
    this.#parts = bruteState.parts;
    this.#frame = bruteState.frame;

    // Get all animations
    const animationsByType = Object.values(animations[this.type === 'panther' ? 'dog' : this.type]);

    const symbolContainer = new PIXI.Container();
    symbolContainer.sortableChildren = true;
    symbolContainer.x = x ?? 0;
    symbolContainer.y = y ?? 0;

    this.container = symbolContainer;

    const maxSvgs: SvgsToLoad = [];

    // For each animation
    for (const animation of animationsByType) {
      const animationContainer = new PIXI.Container();
      animationContainer.name = animation.name;
      animationContainer.sortableChildren = true;
      animationContainer.visible = false;
      this.container.addChild(animationContainer);

      if (animation.name === animations[this.type === 'panther' ? 'dog' : this.type][this.animation].name) {
        animationContainer.visible = true;
        this.#animationContainer = animationContainer;
        this.#animationSymbol = animation;
        this.#frameCount = animation.frames?.length ?? 0;
      }

      // For each frame
      for (const frame of animation.frames ?? []) {
        let svgsToLoad: SvgsToLoad = [];
        this.#initializeContainersAndGetSvgsToLoad(svgsToLoad, animationContainer, animation.parts, frame);

        // Merge svgs
        for (const svg of svgsToLoad) {
          const existingSvg = maxSvgs.find(s => s.svg.name === svg.svg.name);
          if (!existingSvg) {
            maxSvgs.push(svg);
          } else {
            existingSvg.count = Math.max(existingSvg.count, svg.count);
          }
        }
      };
    }

    // Load SVGs
    this.#loadSvgs(maxSvgs);

    // Play animation (loop on frames with PIXI ticker)
    app.ticker.add(() => {
      // Do nothing if not playing
      if (!this.#playing) {
        return;
      }

      this.#timer += app.ticker.elapsedMS;
      if (this.#timer === 0 || this.#timer >= this.#tickRate) {
        this.#timer = this.#timer % this.#tickRate;

        if (this.#frame >= this.#frameCount) {
          this.#frame = loopStart[this.type][this.animation];
        }

        // Hide all svgs
        for (const svg of this.svgs) {
          svg.visible = false;
        }

        // Display frame
        this.#usedSvgs = {};
        this.#displayFrame(this.#animationContainer, this.#animationSymbol);

        // :start event
        if (this.#frame === 0) {
          this.#triggerEvents(`${this.animation}:start`);
        }

        this.#frame++;

        // :end event
        if (this.#frame >= this.#frameCount && loopStart[this.type]?.[this.animation] === undefined) {
          this.#playing = false;
          this.#triggerEvents(`${this.animation}:end`);
        }
      }
    });
  }

  #triggerEvents = (event: string) => {
    // Trigger events
    if (this.events[event]) {
      for (const callback of this.events[event]) {
        callback(event);
      }
    }
  
    // Trigger once events
    if (this.onceEvents[event]) {
      for (const callback of this.onceEvents[event]) {
        callback(event);
      }
      delete this.onceEvents[event];
    }

    // Trigger global events
    if (this.events['*']) {
      for (const callback of this.events['*']) {
        callback(event);
      }
    }

    // Trigger global once events
    if (this.onceEvents['*']) {
      for (const callback of this.onceEvents['*']) {
        callback(event);
      }
      delete this.onceEvents['*'];
    }
  }

  setAnimation(animation: string) {
    this.animation = animation;

    // Hide all animations
    for (const child of this.container.children) {
      if (child instanceof PIXI.Container) {
        child.visible = false;
      }
    }

    // Update current animation
    this.#animationContainer = this.container.children.find((child) => child.name === animations[this.type === 'panther' ? 'dog' : this.type][animation].name) as PIXI.Container;
    this.#animationSymbol = animations[this.type === 'panther' ? 'dog' : this.type][animation];

    // Show current animation
    this.#animationContainer.visible = true;

    // Reset frame
    this.#frame = 0;
    this.#frameCount = this.#animationSymbol.frames?.length ?? 0;
    this.#timer = 0;
    this.#playing = true;

    // Display frame
    this.#usedSvgs = {};
    this.#displayFrame(this.#animationContainer, this.#animationSymbol);
  }

  #initializeContainersAndGetSvgsToLoad = (
    svgsToLoad: SvgsToLoad,
    symbolContainer: PIXI.Container,
    parts: Symbol['parts'],
    frame: FramePart[] = [],
  ) => {
    frame.forEach((framePart, i) => {
      const symbol = parts?.find(p => p.name === framePart.name);

      if (!symbol) {
        throw new Error(`Part ${framePart.name} not found in symbol ${symbolContainer.name}`);
      }

      // SVG
      if (symbol.type === 'svg') {
        const existingSvg = svgsToLoad.find(s => s.svg.name === symbol.name);
        if (existingSvg) {
          existingSvg.count++;
        } else {
          svgsToLoad.push({
            svg: symbol,
            count: 1,
          });
        }
      } else {
        // Symbol

        const container = new PIXI.Container();
        container.sortableChildren = true;
        container.name = symbol.name;
        container.visible = false;
        container.zIndex = frame.length - i;

        symbolContainer.addChild(container);

        // Get frames to load
        let framesToLoad: number[] = [];

        // If symbol has partIdx, only load the corresponding frame
        if (symbol.partIdx) {
          const partValue = this.#parts[symbol.partIdx];

          if (partValue === undefined) {
            throw new Error(`Part ${symbol.partIdx} not found in fighter config`);
          }

          framesToLoad = [partValue];
        } else if (symbol.name === WEAPON_SYMBOL) {
          // Load all weapon frames
          framesToLoad = weaponFrames.map((_, i) => i);
        } else {
          // Load only the first frame
          framesToLoad = [0];
        }

        // For each frame, load the corresponding SVGs
        const svgs: SvgsToLoad = [];
        for (const frameIdx of framesToLoad) {
          const frame = symbol.frames?.[frameIdx];
          if (!frame) {
            continue;
          }

          this.#initializeContainersAndGetSvgsToLoad(svgsToLoad, container, symbol.parts, frame);
        }
      }
    });
  }

  #loadSvgs = (svgsToLoad: SvgsToLoad) => {
    for (const svgToLoad of svgsToLoad) {
      const svg = svgToLoad.svg;

      for (let i = 0; i < svgToLoad.count; i++) {
        // Custom scale
        let customScale = svg.scale ?? 1;
        const size = SCALE * (this.type === 'panther' ? 1.5 : 1);

        const svgSprite = new PIXI.Sprite(Texture.from(svg.svg, {
          resourceOptions: { scale: size * customScale }
        }));
        svgSprite.name = svg.name;
        svgSprite.scale.set(1 / customScale);
        svgSprite.visible = false;

        // Apply offset
        if (svg.offset) {
          svgSprite.x = -(svg.offset.x ?? 0) * size;
          svgSprite.y = -(svg.offset.y ?? 0) * size;
        }

        this.container.addChild(svgSprite);
        this.svgs.push(svgSprite);
      }
    }
  }

  #displayFrame = (
    symbolContainer: PIXI.Container,
    symbol: Symbol | Svg,
    colorIdx?: string,
    zIndex?: number,
    svgMaskedBy?: number,
  ) => {
    if (symbol.type === 'svg') {
      const sprite = this.svgs.filter(s => s.name === symbol.name)[this.#usedSvgs[symbol.name] ?? 0];
  
      if (!sprite) {
        throw new Error(`Sprite ${symbol.name} not found`);
      }
  
      // Hide shield if needed
      if (sprite.name === SHIELD_SYMBOL[this.type]) {
        sprite.visible = this.shield;
      } else {
        sprite.visible = true;
      }

      // Apply masking
      if (svgMaskedBy) {
        // Get mask sprite
        const maskSprite = this.svgs.find((svg) => svg.name === `Symbol${svgMaskedBy}`);
        if (!maskSprite) {
          throw new Error(`Mask sprite Symbol${svgMaskedBy} not found`);
        }

        symbolContainer.addChild(maskSprite);
        sprite.mask = maskSprite;
      }
  
      // Apply color
      if (colorIdx) {
        const color = this.#colors[colorIdx];
        if (!color) {
          throw new Error(`Color ${colorIdx} not found`);
        }
  
        sprite.tint = parseInt(color.replace('#', ''), 16);
      }
  
      // Add to current container
      sprite.zIndex = zIndex ?? 0;
      symbolContainer.addChild(sprite);
  
      // Increment used count
      if (this.#usedSvgs[symbol.name]) {
        this.#usedSvgs[symbol.name]++;
      } else {
        this.#usedSvgs[symbol.name] = 1;
      }
    } else {
      const usedSymbols: string[] = [];
  
      // Get frame to load
      let frameToLoad: number;
  
      // If symbol has partIdx, only load the corresponding frame
      if (symbol.partIdx) {
        const partValue = this.#parts[symbol.partIdx];
  
        if (partValue === undefined) {
          throw new Error(`Part ${symbol.partIdx} not found in fighter config`);
        }
  
        frameToLoad = partValue;
      } else if (symbol.name === WEAPON_SYMBOL) {
        // Load current weapon frame
        frameToLoad = weaponFrames.indexOf(this.weapon);
      } else {
        // If the symbol is an animation, load the current frame
        if (animationSymbolNames[this.type === 'panther' ? 'dog' : this.type].includes(symbol.name)) {
          frameToLoad = this.#frame;
        } else {
          // Else load the first frame
          frameToLoad = 0;
        }
      }
  
      const frameParts = symbol.frames?.[frameToLoad] ?? [];
      const usedContainers: Record<string, number> = {};
  
      for (let i = 0; i < frameParts.length; i++) {
        const framePart = frameParts[i];
  
        // Count identic symbols already used
        const identicSymbolsCount = usedSymbols.filter(s => s === framePart.name).length;
  
        // Get corresponding symbol
        const framePartSymbol = symbol.parts?.filter(p => p.name === framePart.name)[identicSymbolsCount];
  
        if (!framePartSymbol) {
          throw new Error(`Part ${framePart.name} not found in symbol ${symbol.name}`);
        }
  
        if (framePartSymbol.type === 'svg') {
          this.#displayFrame(
            symbolContainer,
            framePartSymbol,
            colorIdx,
            frameParts.length - i,
            framePart.maskedBy,
          );
          continue;
        }
  
        // Get corresponding container
        const sameParts = symbolContainer.children.filter(
          (child) => child instanceof PIXI.Container
            && child.name === framePart.name
        ).length;
        const framePartContainer = symbolContainer.children
          .filter((child) => child instanceof PIXI.Container && child.name === framePart.name)
        [sameParts - (usedContainers[framePart.name] ?? 0) - 1] as PIXI.Container | undefined;
  
        if (!framePartContainer) {
          throw new Error(`Container ${framePart.name} not found`);
        }
  
        // Apply transform
        if (framePart.transform) {
          const size = SCALE * (this.type === 'panther' ? 1.5 : 1);
          framePartContainer.transform.setFromMatrix(PixiHelper.matrixFromObject(framePart.transform, size));
        }
  
        // Apply color offset
        if (framePart.colorOffset) {
          if (this.type === 'panther') {
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
          const maskSprite = this.svgs.find((svg) => svg.name === `Symbol${framePart.maskedBy}`);
          if (!maskSprite) {
            throw new Error(`Mask sprite Symbol${framePart.maskedBy} not found`);
          }
  
          framePartContainer.addChild(maskSprite);
          framePartContainer.mask = maskSprite;
        }
  
        // Apply visibility
        framePartContainer.visible = true;
        if (usedContainers[framePart.name]) {
          usedContainers[framePart.name]++;
        } else {
          usedContainers[framePart.name] = 1;
        }
  
        // Handle children
        this.#displayFrame(framePartContainer, framePartSymbol, framePartSymbol.colorIdx ?? colorIdx);
      }
    }
  }

  once = (event: string, callback: (event: string) => void) => {
    if (!this.onceEvents[event]) {
      this.onceEvents[event] = [];
    }

    this.onceEvents[event].push(callback);
  }

  on = (event: string, callback: (event: string) => void) => {
    if (!this.events[event]) {
      this.events[event] = [];
    }

    this.events[event].push(callback);
  }

  play = () => {
    this.#playing = true;
  }

  pause = () => {
    this.#playing = false;
  }
}

type BruteState = {
  animation: string;
  frame: number;
  type: 'male' | 'female' | 'dog' | 'bear' | 'panther';
  shield: boolean;
  weapon: string | null;
  colors: Record<string, string>;
  parts: Record<string, number>;
};

const fighter = new Fighter({
  animation: 'idle',
  frame: 0,
  type: 'male',
  shield: false,
  weapon: 'piopio',
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
    _p2: 0,  // Body size (small = 0, big = 7) (male only, 0 for females)
    _p3: 4,  // Hair [0-11] 12 = no head
    _p4: 3,  // (male) Beard [0-4] 5 = nothing / (female) Front hair [0-2] 3 = nothing
    _p7: 1,  // Main clothing [0-6] 7 = naked
    _p1: 0,  // Armor variation [0-1]
    _p1a: 0, // [0-1] 0=belt, 1=nothing
    _p1b: 0, // 0=roman belt, 1=nothing
    _p6: 0,  // (male) 0=shorts, 1=trousers / (female) 0=shorts, 1=nothing
    _p8: 0,  // [0-4] Supposed to be shoes but doesn't change anything ??
    _p7b: 2, // Shoes underside (2 = visible, others = hidden)
    _p5: 1,  // 0=Nothing, 1=Shirt. Doesn't work
  },
}, 200, 200);

console.log(`SVG count: ${fighter.svgs.length}`);

fighter.on('*', (event) => {
  console.log(event);
});
fighter.once('*', (event) => {
  console.log(event);
});

fighter.on('arrive:start', () => {
  fighter.pause();
  
  // Delay next frames
  setTimeout(() => {
    fighter.play();
  }, 1000);
});

viewport.addChild(fighter.container);

declare global {
  interface Window { fighter: Fighter; }
}
window.fighter = fighter;