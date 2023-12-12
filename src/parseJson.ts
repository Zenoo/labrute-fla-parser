import { Svg, Symbol } from './common';
import fs from 'fs';

type Json = {
  elements?: [DOMSymbolItem];
};

type DOMSymbolItem = {
  name: 'DOMSymbolItem';
  attributes?: {
    xmlns?: string;
    ['xmlns:xsi']?: string;
    name?: string;
    lastModified?: string;
  };
  elements?: [timeline];
};

type timeline = {
  name: 'timeline';
  elements?: [DOMTimeline];
};

type DOMTimeline = {
  name: 'DOMTimeline';
  attributes?: {
    name?: string;
  };
  elements?: [layers];
};

type layers = {
  name: 'layers';
  elements?: [DOMLayer];
};

type DOMLayer = {
  name: 'DOMLayer';
  attributes?: {
    name?: string;
    color?: string;
    current?: string;
    isSelected?: string;
  };
  elements?: [frames];
};

type frames = {
  name: 'frames';
  elements?: DOMFrame[];
};

type DOMFrame = {
  name: 'DOMFrame';
  attributes?: {
    index?: string;
    keyMode?: string;
    duration?: string;
    motionTweenScale?: string;
  };
  elements?: (elements | ActionScript)[];
};

type elements = {
  name: 'elements';
  elements?: [DOMShape | DOMSymbolInstance];
};

type ActionScript = {
  name: 'ActionScript';
  elements?: [script];
};

type script = {
  name: 'script';
};

type DOMShape = {
  name: 'DOMShape';
  attributes?: {
    correspondingSymbol?: string;
    isFloating?: string;
  };
  elements?: (fills | strokes | edges)[];
};

type fills = {
  name: 'fills';
  elements?: FillStyle[];
};

type FillStyle = {
  name: 'FillStyle';
  attributes?: {
    index?: string;
  };
  elements?: [SolidColor | RadialGradient];
};

type SolidColor = {
  name: 'SolidColor';
  attributes?: {
    color?: string;
    alpha?: string;
  };
};

type RadialGradient = {
  name: 'RadialGradient';
  attributes?: {
    focalPointRatio?: string;
  };
  elements?: (matrix | GradientEntry)[];
};

type matrix = {
  name: 'matrix';
  elements?: [Matrix];
};

type Matrix = {
  name: 'Matrix';
  attributes?: {
    a?: string;
    b?: string;
    c?: string;
    d?: string;
    tx?: string;
    ty?: string;
  };
};

type strokes = {
  name: 'strokes';
  elements?: StrokeStyle[];
};

type StrokeStyle = {
  name: 'StrokeStyle';
  attributes?: {
    index?: string;
  };
  elements?: [SolidStroke];
};

type SolidStroke = {
  name: 'SolidStroke';
  attributes?: {
    scaleMode?: string;
    weight?: string;
  };
  elements?: [fill];
};

type fill = {
  name: 'fill';
  elements?: [SolidColor];
};

type edges = {
  name: 'edges';
  elements?: Edge[];
};

type Edge = {
  name: 'Edge';
  attributes?: {
    fillStyle0?: string;
    fillStyle1?: string;
    strokeStyle?: string;
    edges?: string;
  };
};

type GradientEntry = {
  name: 'GradientEntry';
  attributes?: {
    color?: string;
    alpha?: string;
    ratio?: string;
  };
};

type DOMSymbolInstance = {
  name: 'DOMSymbolInstance',
  attributes?: {
    libraryItemName?: string;
    name?: string;
    centerPoint3DX?: string;
    centerPoint3DY?: string;
  };
  elements?: (matrix | transformationPoint | color)[];
};

type transformationPoint = {
  name: 'transformationPoint';
  elements?: [Point];
};

type Point = {
  name: 'Point';
};

type color = {
  name: 'color';
  elements?: [Color];
};

type Color = {
  name: 'Color';
  attributes?: {
    redOffset?: string;
    greenOffset?: string;
    blueOffset?: string;
    alphaMultiplier?: string;
  };
};

const getSvg = (symbolName: string): Svg => {
  const name = symbolName.split(' ').join('');
  try {
    // Get the svg file
    let svg = fs.readFileSync(`./src/svg/${name}.svg`, 'utf8');

    // Set every stroke-width to 1
    svg = svg.replace(/stroke-width="[^"]+"/g, 'stroke-width="1"');

    // Increase svg width by 2
    svg = svg.replace(/width="([^"]+)px"/, (_, width) => `width="${+width + 2}px"`);

    // Increase svg height by 2
    svg = svg.replace(/height="([^"]+)px"/, (_, height) => `height="${+height + 2}px"`);

    // Increase tx and ty by 1
    svg = svg.replace(/<g transform="matrix\(1.0, 0.0, 0.0, 1.0, ([^,]+), ([^,]+)\)">/, (_, tx, ty) => `<g transform="matrix(1.0, 0.0, 0.0, 1.0, ${+tx + 1}, ${+ty + 1})">`);

    // Get the offset values from the svg file
    const offset = svg.match(/<g transform="matrix\(1.0, 0.0, 0.0, 1.0, (.*), (.*)\)">/);

    return {
      type: 'svg',
      name,
      svg,
      offset: {
        x: offset ? +offset[1] : 0,
        y: offset ? +offset[2] : 0,
      },
    
    };
  } catch (error) {
    // Try with name - 1
    try {
      const nameMinusOne = `Symbol${+name.replace('Symbol', '') - 1}`;
      let svg = fs.readFileSync(`./src/svg/${nameMinusOne}.svg`, 'utf8');

      // Set every stroke-width to 1
      svg = svg.replace(/stroke-width="[^"]+"/g, 'stroke-width="1"');
  
      // Increase svg width by 2
      svg = svg.replace(/width="([^"]+)px"/, (_, width) => `width="${+width + 2}px"`);
  
      // Increase svg height by 2
      svg = svg.replace(/height="([^"]+)px"/, (_, height) => `height="${+height + 2}px"`);
  
      // Increase tx and ty by 1
      svg = svg.replace(/<g transform="matrix\(1.0, 0.0, 0.0, 1.0, ([^,]+), ([^,]+)\)">/, (_, tx, ty) => `<g transform="matrix(1.0, 0.0, 0.0, 1.0, ${+tx + 1}, ${+ty + 1})">`);

      // Get the offset values from the svg file
      const offset = svg.match(/<g transform="matrix\(1.0, 0.0, 0.0, 1.0, (.*), (.*)\)">/);

      return {
        type: 'svg',
        name: name,
        svg,
        offset: {
          x: offset ? +offset[1] : 0,
          y: offset ? +offset[2] : 0,
        },
      };

    } catch (error) {
      console.log(`No SVG found for ${name}. Export it and rerun the script.`);
      return {
        type: 'svg',
        name,
        svg: 'MISSING',
        offset: {
          x: 0,
          y: 0,
        },
      };
    }
  }
};

const parseSymbol = (symbolItem?: DOMSymbolItem): Symbol => {
  if (!symbolItem) {
    throw new Error('No symbolItem');
  }

  const result: Symbol = {
    type: 'symbol',
    name: (symbolItem.attributes?.name || '').split(' ').join(''),
    parts: [],
    frames: [],
  };

  if (!result.frames) {
    throw new Error('No frames');
  }

  const layers = symbolItem.elements?.[0].elements?.[0].elements?.[0].elements;

  // Go through all layers
  for (const layer of layers || []) {
    const frames = layer.elements?.[0].elements;

    if (!frames) {
      continue;
    }

    for (const frame of frames || []) {
      const elements = frame.elements?.find((element) => element.name === 'elements')?.elements as (DOMShape | DOMSymbolInstance)[] | undefined;

      for (const element of elements || []) {
        const index = frame.attributes?.index ? +frame.attributes.index : 0;

        // Sub symbol
        if (element.name === 'DOMSymbolInstance') {
          const colors = element.elements?.find((element) => element.name === 'color')?.elements?.[0] as Color | undefined;
          const matrix = element.elements?.find((element) => element.name === 'matrix')?.elements?.[0] as Matrix | undefined;
          
          const customIndex = element.attributes?.name;
          const partIdx = customIndex ? customIndex.startsWith('_p') ? +customIndex.replace(/\D/g, '') : undefined : undefined;
          const colorIdx = customIndex ? customIndex.startsWith('_col') ? +customIndex.replace(/\D/g, '') : undefined : undefined;
        
          // Store part details
          result.parts?.push({
            type: 'symbol',
            name: (element.attributes?.libraryItemName || '').split(' ').join(''),
            partIdx,
            colorIdx,
          });

          // Store part frame details
          if (!result.frames[index]) {
            result.frames[index] = [];
          }

          const frameData = {
            type: 'symbol' as const,
            name: (element.attributes?.libraryItemName || '').split(' ').join(''),
            colorOffset: colors ? {
              r: +(colors.attributes?.redOffset || 0),
              g: +(colors.attributes?.greenOffset || 0),
              b: +(colors.attributes?.blueOffset || 0),
            } : undefined,
            alpha: (colors && colors.attributes?.alphaMultiplier) ? +colors.attributes.alphaMultiplier : undefined,
            transform: matrix ? {
              tx: matrix.attributes?.tx ? +matrix.attributes.tx : undefined,
              ty: matrix.attributes?.ty ? +matrix.attributes.ty : undefined,
              a: matrix.attributes?.a ? +matrix.attributes.a : undefined,
              d: matrix.attributes?.d ? +matrix.attributes.d : undefined,
              b: matrix.attributes?.b ? +matrix.attributes.b : undefined,
              c: matrix.attributes?.c ? +matrix.attributes.c : undefined,
            } : undefined,
          };
          result.frames[index].push(frameData);

          // Add to next frames if duration exists
          const duration = frame.attributes?.duration;
          if (duration) {
            for (let i = 1; i < +duration; i++) {
              if (!result.frames[index + i]) {
                result.frames[index + i] = [];
              }
              result.frames[index + i].push(frameData);
            }
          }

          continue;
        }

        // Svg
        const svgName = element.attributes?.correspondingSymbol
          ? `Symbol ${element.attributes.correspondingSymbol}`
          : (symbolItem.attributes?.name || '');

        const svg = getSvg(svgName);

        // Store part details
        result.parts?.push(svg);

        // Store part frame details
        if (!result.frames[index]) {
          result.frames[index] = [];
        }

        result.frames[index].push({
          type: 'svg',
          name: svg.name,
        });
      }
    }
  }

  // Revert parts
  if (result.parts) {
    result.parts.reverse();
  }

  // Initialize empty frames
  for (let i = 0; i < result.frames.length; i++) {
    if (!result.frames[i]) {
      result.frames[i] = [];
    }
  }
  
  return result;
};

export const parseJson = (jsonString: string): Symbol => {
  const json: Json = JSON.parse(jsonString);
  
  return parseSymbol(json.elements?.[0]);
};