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
  };
};

const getSvg = (symbolName: string): Svg => {
  const name = symbolName.split(' ').join('');
  try {
    // Get the svg file
    const svg = fs.readFileSync(`./src/svg/${name}.svg`, 'utf8');

    // Get the offset values from the svg file
    const offset = svg.match(/<g transform="matrix\(1.0, 0.0, 0.0, 1.0, (.*), (.*)\)">/);


    return {
      type: 'svg',
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
      svg: 'MISSING',
      offset: {
        x: 0,
        y: 0,
      },
    };
  }
};

const parseSymbol = (symbolInstance: DOMSymbolInstance, symbolItem?: DOMSymbolItem): Symbol => {
  const colors = symbolInstance.elements?.find((element) => element.name === 'color')?.elements?.[0] as Color | undefined;
  const matrix = symbolInstance.elements?.find((element) => element.name === 'matrix')?.elements?.[0] as Matrix | undefined;
  
  const result: Symbol = {
    type: 'symbol',
    name: (symbolInstance.attributes?.libraryItemName || '').split(' ').join(''),
    layers: [],
    partIdx: symbolInstance.attributes?.name ? +symbolInstance.attributes.name.replace(/\D/g, '') : undefined,
    colorOffset: colors ? {
      r: +(colors.attributes?.redOffset || 0),
      g: +(colors.attributes?.greenOffset || 0),
      b: +(colors.attributes?.blueOffset || 0),
    } : undefined,
    transform: matrix ? {
      tx: matrix.attributes?.tx ? +matrix.attributes.tx : undefined,
      ty: matrix.attributes?.ty ? +matrix.attributes.ty : undefined,
      a: matrix.attributes?.a ? +matrix.attributes.a : undefined,
      d: matrix.attributes?.d ? +matrix.attributes.d : undefined,
      b: matrix.attributes?.b ? +matrix.attributes.b : undefined,
      c: matrix.attributes?.c ? +matrix.attributes.c : undefined,
    } : undefined,
  };

  // Stop here if there is no symbolItem, it will be parsed later
  if (!symbolItem) {
    result.name = `REPLACE|${result.name}|REPLACE`;
    return result;
  }

  const layers = symbolItem.elements?.[0].elements?.[0].elements?.[0].elements;

  // Go through all layers
  result.layers = (layers?.map((layer) => {
    const frames = layer.elements?.[0].elements;

    return {
      frames: (frames?.map((frame) => {
        const elements = frame.elements?.find((element) => element.name === 'elements')?.elements as (DOMShape | DOMSymbolInstance)[] | undefined;

        return {
          parts: elements?.map((element) => {
            if (element.name === 'DOMSymbolInstance') {
              return parseSymbol(element);
            }

            return getSvg(symbolInstance.attributes?.libraryItemName || '');
          }) || [],
        };
      }) || []).filter((frame) => frame.parts.length > 0),
    };
  }) || []).filter((layer) => layer.frames.length > 0);
  
  return result;
};

export const parseJson = (jsonString: string): Symbol => {
  const json: Json = JSON.parse(jsonString);
  
  return parseSymbol({
    name: 'DOMSymbolInstance',
    attributes: {
      libraryItemName: json.elements?.[0].attributes?.name,
    },
  }, json.elements?.[0]);
};