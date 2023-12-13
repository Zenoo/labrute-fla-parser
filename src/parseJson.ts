import { FramePart, Svg, Symbol } from './common';
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

// Some symbols XML call different SVGs, this is a map in their order of appearance
const SVGLinks: Record<number, number[] | undefined> = {
  1: [1, 1, 1, 1],
  15: [7, 14],
  41: [41],
  44: [44],
  45: [45],
  46: [46],
  47: [47],
  48: [48],
  49: [49],
  50: [50],
  51: [51],
  52: [52],
  53: [53],
  54: [54],
  55: [55],
  56: [56],
  57: [57],
  58: [58],
  59: [59],
  60: [60],
  63: [63],
  64: [64],
  65: [65],
  66: [66],
  67: [67],
  68: [39, 40, 42, 43, 50, 53, 56, 57, 58, 59, 63, 64, 65],
  115: [111],
  143: [131, 140],
  163: [162, 159],
  172: [168, 171],
  185: [181],
  206: [196, 205],
  230: [229, 228],
  238: [235, 237],
  259: [254],
  274: [251],
  304: [303, 300],
  328: [327, 322, 321],
  339: [329],
  354: [352, 353],
  375: [368],
  393: [391, 392],
  410: [363, 380, 394, 399],
  464: [463, 460],
  469: [465, 459],
  526: [518, 519, 520, 521, 523],
  541: [533, 539],
  552: [549, 550, 551],
  645: [638],
  678: [675],
  698: [695],
  717: [714],
  729: [720, 705],
  770: [755, 764],
  875: [873, 874],
};

// Some symbols XML define their own SVG in multiple DOMShapes, list them here to override the parts later
const XMLExportingThemselves = [
  45,
  52,
  54,
  66,
  67,
  114,
  127,
  184,
  212,
  255,
  260,
  270,
  288,
  289,
  319,
  323,
  522,
  524,
  525,
  531,
  532,
  649,
  687,
  735,
  737,
  740,
  753,
  756,
  789,
  793,
  872,
  921,
  929,
  931,
  933,
];

const getSvg = (symbolName: string, svgIndex: number): Svg => {
  const name = symbolName.split(' ').join('');
  let svgNumber = +name.replace('Symbol', '');
  let svg = '';

  // Check if svg is in the links
  const svgLink = SVGLinks[svgNumber]?.[svgIndex];

  if (!svgLink) {
    // Symbol with multiple SVGs, we need a link to be able to parse it
    if (svgIndex > 0) {
      throw new Error(`Missing SVG links for ${name}`);
    }

    // Use SVG at symbol - 1
    svgNumber = svgNumber - 1;
  } else {
    svgNumber = svgLink;
  }

  try {
    // Get the svg file
    svg = fs.readFileSync(`./src/svg/Symbol${svgNumber}.svg`, 'utf8');
  } catch (error) {
    if (svgLink) {
      throw new Error(`SVG ${svgLink} not found for ${name}. Export it and rerun the script.`);
    }

    // Try with initial svg number
    try {
      svgNumber = +name.replace('Symbol', '');
      svg = fs.readFileSync(`./src/svg/Symbol${svgNumber}.svg`, 'utf8');
    } catch (error) {
      throw new Error(`SVG ${svgNumber} not found for ${name}. Export it and rerun the script.`);
    }
  }

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

  const object: Svg = {
    type: 'svg',
    name: `Symbol${svgNumber}`,
    svg,
    offset: {
      x: offset ? +offset[1] : 0,
      y: offset ? +offset[2] : 0,
    },
  };

  return object;
};

const parseSymbol = (symbolItem?: DOMSymbolItem): Symbol => {
  if (!symbolItem) {
    throw new Error('No symbolItem');
  }

  const symbolName = symbolItem.attributes?.name || '';
  const symbolNumber = +symbolName.replace('Symbol', '');

  let svgIndex = 0;

  const result: Symbol = {
    type: 'symbol',
    name: (symbolItem.attributes?.name || '').split(' ').join(''),
    parts: [],
    frames: [],
  };

  if (!result.frames) {
    throw new Error('No frames');
  }

  // Check if an override exists
  const override = XMLExportingThemselves.find((number) => number === symbolNumber);
  if (override) {
    const svg = getSvg(`Symbol${override}`, svgIndex);

    // Store part details
    result.parts?.push(svg);

    // Store part frame details
    result.frames[0] = [{
      type: 'svg',
      name: svg.name,
    }];

    return result;
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

        if (element.name === 'DOMShape') {
          // Svg
          const svgName = symbolItem.attributes?.name || '';
  
          const svg = getSvg(svgName, svgIndex);
  
          // Store part details
          result.parts?.push(svg);
  
          // Store part frame details
          if (!result.frames[index]) {
            result.frames[index] = [];
          }

          const svgObject = {
            type: 'svg',
            name: svg.name,
          } as FramePart;
  
          result.frames[index].push(svgObject);

          // Add to next frames if duration exists
          const duration = frame.attributes?.duration;
          if (duration) {
            for (let i = 1; i < +duration; i++) {
              if (!result.frames[index + i]) {
                result.frames[index + i] = [];
              }
              result.frames[index + i].push(svgObject);
            }
          }
  
          svgIndex++;
        }
      }
    }
  }

  // Special case for 68 (weapons), add mask to every symbol except 38 and 39
  if (symbolNumber === 68) {
      for (const frame of result.frames) {
        for (const part of frame) {
          if (part.type === 'symbol' && part.name !== 'Symbol38' && part.name !== 'Symbol39') {
            part.maskedBy = 39;
          }
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