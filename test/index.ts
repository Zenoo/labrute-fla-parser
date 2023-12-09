import * as PIXI from 'pixi.js';
import { Symbol } from '../src/common';
import { Male, MaleAnimation } from '../src/Symbols';
import { Filter, Texture } from 'pixi.js';
import { TextureManager } from './TextureManager';
import { PixiHelper } from './PixiHelper';
import ColorOffsetShader from './ColorOffsetShader';

const app = new PIXI.Application<HTMLCanvasElement>({
  background: '#1099bb',
  resizeTo: window,
  antialias: true,
  autoDensity: true,
  autoStart: false,
  resolution: window.devicePixelRatio,
});

document.body.appendChild(app.view);

const viewport = app.stage.addChild(new PIXI.Container());
app.renderer.render(app.stage);
app.stage.addChild(viewport);


export const displaySymbol = async (symbol: Symbol, frame?: number) => {
  const symbolContainer = new PIXI.Container();
  symbolContainer.name = symbol.name;

  // Apply transform
  if (symbol.transform) {
    symbolContainer.transform.setFromMatrix(PixiHelper.matrixFromObject(symbol.transform));
  }

  // Apply color offset
  if (symbol.colorOffset) {
    symbolContainer.filters = [new Filter(undefined, ColorOffsetShader, {
      offset: new Float32Array([
        symbol.colorOffset.r ?? 0,
        symbol.colorOffset.g ?? 0,
        symbol.colorOffset.b ?? 0
      ]),
      mult: new Float32Array([1, 1, 1])
    })];
  }

  // Apply alpha
  if (symbol.alpha) {
    symbolContainer.alpha = symbol.alpha;
  }

  // For each layer
  for (let layerIdx = 0; layerIdx < symbol.layers.length; layerIdx++) {
    const layer = symbol.layers[layerIdx];
    const layerContainer = new PIXI.Container();
    layerContainer.name = `layer${layerIdx}`;

    // For each frame
    for (let frameIdx = 0; frameIdx < layer.frames.length; frameIdx++) {
      const currentFrame = layer.frames[frameIdx];
      const frameContainer = new PIXI.Container();
      frameContainer.name = `frame${frameIdx}`;

      // Hide every frame but 0 for now
      frameContainer.visible = frameIdx === 0;

      if (!currentFrame) continue;

      // For each part
      for (let partIdx = 0; partIdx < currentFrame.parts.length; partIdx++) {
        const part = currentFrame.parts[partIdx];

        // If it's a symbol
        if (part.type === 'symbol') {
          // Display it
          const innerSymbol = await displaySymbol(part, frame);

          if (innerSymbol) {
            frameContainer.addChild(innerSymbol);
          }
          return;
        }
  
        // If it's an SVG
        if (part.type === 'svg') {
          // Get sprite
          const sprite = new PIXI.Sprite(TextureManager.getTexture(part.svg));
  
          // Add to container
          frameContainer.addChild(sprite);
          return;
        }
      };

      layerContainer.addChild(frameContainer);
    }

    symbolContainer.addChild(layerContainer);
  };

  return symbolContainer;
};

const iddleMale = await displaySymbol(Male, MaleAnimation.iddle)

if (iddleMale) {
  viewport.addChild(iddleMale);
}