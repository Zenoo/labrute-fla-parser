import * as PIXI from 'pixi.js';
import { FramePart, Svg, Symbol } from '../src/common';
import { Male, MaleAnimation } from '../src/Symbols';
import { Filter, Texture } from 'pixi.js';
import { TextureManager } from './TextureManager';
import { PixiHelper } from './PixiHelper';
import ColorOffsetShader from './ColorOffsetShader';
import Symbol411 from '../src/Symbols/Symbol411';

type PartContainer = PIXI.Container & {
  source?: Symbol | Svg;
};

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

const initializeParts = (parts: (Symbol | Svg)[]) => {
  const partContainers: PartContainer[] = [];

  parts.forEach(part => {
    const container: PartContainer = new PIXI.Container();
    container.name = part.name;
    container.source = part;
    container.visible = false;

    if (part.type === 'symbol') {
      if (part.parts) {
        container.addChild(...initializeParts(part.parts));
      }
      // Apply color
      if (part.colorIdx) {
        // TODO: Apply color from config object
        // container.color = '#0000ff';
      }
    }

    if (part.type === 'svg') {
      container.addChild(new PIXI.Sprite(Texture.from(part.svg)));
    }

    partContainers.push(container);
  });

  return partContainers;
};

const getPartContainer = (parts: PIXI.DisplayObject[], type: 'symbol' | 'svg', name: string) => {
  return (parts as PartContainer[]).find(part => part.source?.type === type && part.name === name);
};

const displayPart = (parts: PIXI.DisplayObject[], part: FramePart) => {
  const partContainer = getPartContainer(parts, part.type, part.name);

  if (!partContainer) {
    throw new Error(`Part ${part.type}:${part.name} not found`);
  }

  // Apply transform
  if (part.transform) {
    partContainer.transform.setFromMatrix(PixiHelper.matrixFromObject(part.transform));
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

  // Apply visibility
  partContainer.visible = true;

  // Handle children
  if (part.type === 'symbol') {
    partContainer.children.forEach(child => {
      // Only display frame 0 for now
      const source = (child as PartContainer).source;

      if (!source) {
        throw new Error(`Child ${child.name} has no source`);
      }

      if (source.type === 'symbol' && source.frames?.[0]) {
        source.frames[0].forEach(childPart => {
          displayPart(child.children as PIXI.DisplayObject[], childPart);
        });
      }
    });
  }
};

const displaySymbol = (symbol: Symbol, frame?: number, x?: number, y?: number) => {
  const symbolContainer = new PIXI.Container();
  symbolContainer.name = symbol.name;
  symbolContainer.x = x ?? 0;
  symbolContainer.y = y ?? 0;

  // Initialize all parts
  if (symbol.parts) {
    symbolContainer.addChild(...initializeParts(symbol.parts));
  }

  // Only display frame 0 for now
  symbol.frames?.[0].forEach(part => {
    displayPart(symbolContainer.children, part);
  });

  return symbolContainer;
};

const symbol = displaySymbol(Symbol411, 0, 100, 100);

viewport.addChild(symbol);
console.log(symbol);

// Write some dumb text to the screen to make sure it's working
const text = new PIXI.Text('Hello world');
text.x = 100;
text.y = 200;
viewport.addChild(text);