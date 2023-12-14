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
  6: [5],
  15: [7, 14],
  17: [16],
  18: [18],
  21: [20],
  23: [22],
  25: [24],
  27: [26],
  32: [31],
  34: [33],
  37: [36],
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
  61: [60],
  63: [63],
  64: [64],
  65: [65],
  66: [66],
  67: [67],
  68: [39, 40, 42, 43, 50, 53, 56, 57, 58, 59, 63, 64, 65],
  69: [69],
  72: [71],
  76: [76],
  82: [81],
  83: [83],
  84: [84],
  86: [86],
  89: [88],
  91: [90],
  93: [92],
  95: [94],
  98: [97],
  100: [99],
  107: [106],
  110: [109],
  113: [112],
  114: [114],
  115: [111],
  117: [116],
  119: [118],
  123: [123],
  125: [125],
  127: [127],
  130: [129],
  133: [132],
  135: [134],
  137: [136],
  139: [138],
  142: [141],
  143: [131, 140],
  145: [144],
  151: [150],
  153: [152],
  155: [154],
  158: [157],
  161: [160],
  163: [162, 159],
  165: [164],
  167: [166],
  169: [169],
  172: [168, 171],
  178: [177],
  180: [179],
  183: [182],
  184: [184],
  185: [181],
  186: [186],
  188: [187],
  193: [192],
  195: [194],
  198: [197],
  200: [199],
  202: [201],
  204: [203],
  206: [196, 205],
  210: [210],
  212: [212],
  220: [219],
  222: [221],
  224: [223],
  227: [226],
  230: [229, 228],
  232: [231],
  234: [233],
  238: [235, 237],
  243: [243],
  246: [245],
  248: [247],
  250: [249],
  253: [252],
  255: [255],
  258: [257],
  259: [254],
  260: [260],
  263: [262],
  265: [264],
  267: [266],
  269: [268],
  270: [270],
  272: [271],
  274: [251],
  279: [278],
  281: [280],
  283: [282],
  287: [286],
  288: [288],
  289: [289],
  292: [291],
  294: [293],
  296: [295],
  299: [298],
  302: [301],
  304: [303, 300],
  306: [305],
  308: [307],
  310: [309],
  312: [311],
  314: [313],
  316: [315],
  318: [317],
  319: [319],
  323: [323],
  326: [325],
  328: [327, 322, 321],
  331: [330],
  333: [332],
  335: [334],
  337: [336],
  339: [329],
  344: [343],
  347: [346],
  348: [348],
  349: [345],
  351: [350],
  354: [352, 353],
  356: [355],
  358: [357],
  362: [361],
  365: [364],
  367: [366],
  370: [369],
  372: [371],
  374: [373],
  375: [368],
  377: [376],
  379: [378],
  382: [381],
  384: [383],
  386: [385],
  388: [387],
  390: [389],
  393: [391, 392],
  396: [395],
  398: [397],
  401: [400],
  403: [402],
  405: [404],
  407: [406],
  409: [408],
  410: [363, 380, 394, 399],
  413: [412],
  415: [414],
  418: [417],
  428: [427],
  430: [429],
  432: [431],
  434: [433],
  436: [435],
  438: [437],
  440: [439],
  442: [441],
  444: [443],
  446: [445],
  448: [447],
  464: [463, 460],
  469: [465, 459],
  454: [453],
  456: [455],
  458: [457],
  462: [461],
  467: [466],
  473: [472],
  480: [480],
  481: [481],
  482: [482],
  483: [483],
  484: [484],
  485: [485],
  487: [487],
  488: [486],
  500: [499],
  502: [501],
  512: [511],
  515: [514],
  522: [522],
  524: [524],
  525: [525],
  526: [518, 519, 520, 521, 523],
  527: [527],
  528: [528],
  529: [529],
  530: [530],
  531: [531],
  532: [532],
  534: [534],
  535: [535],
  536: [536],
  537: [537],
  538: [538],
  540: [540],
  541: [533, 539],
  552: [549, 550, 551],
  554: [553],
  556: [555],
  557: [557],
  559: [558],
  561: [560],
  565: [564],
  568: [567],
  570: [569],
  573: [572],
  583: [582],
  587: [586],
  589: [588],
  597: [596],
  599: [598],
  601: [600],
  603: [602],
  611: [610],
  614: [613],
  616: [615],
  619: [618],
  621: [620],
  623: [622],
  630: [629],
  632: [631],
  634: [633],
  637: [636],
  640: [639],
  642: [641],
  644: [643],
  645: [638],
  649: [649],
  652: [651],
  654: [653],
  656: [655],
  658: [657],
  664: [663],
  667: [666],
  669: [668],
  672: [671],
  674: [673],
  677: [676],
  678: [675],
  686: [685],
  687: [687],
  697: [696],
  698: [695],
  704: [703],
  707: [706],
  709: [708],
  711: [710],
  713: [712],
  716: [715],
  717: [714],
  719: [718],
  722: [721],
  724: [723],
  726: [725],
  728: [727],
  729: [720, 705],
  735: [735],
  737: [737],
  739: [738],
  740: [740],
  743: [742],
  746: [745],
  748: [747],
  751: [750],
  753: [753],
  756: [756],
  758: [757],
  760: [759],
  763: [762],
  766: [765],
  768: [767],
  770: [755, 764],
  775: [774],
  779: [778],
  781: [780],
  783: [782],
  785: [784],
  787: [786],
  789: [789],
  792: [791],
  793: [793],
  797: [796],
  799: [798],
  801: [800],
  803: [802],
  805: [804],
  809: [808],
  811: [810],
  814: [813],
  824: [823],
  826: [825],
  828: [827],
  830: [829],
  831: [822],
  836: [835],
  839: [838],
  841: [840],
  851: [850],
  872: [872],
  875: [873, 874],
  883: [882],
  885: [884],
  887: [886],
  889: [888],
  891: [890],
  893: [892],
  896: [895],
  898: [897],
  900: [899],
  902: [901],
  909: [908],
  916: [915],
  920: [919],
  921: [921],
  924: [923],
  926: [925],
  928: [927],
  929: [929],
  931: [931],
  933: [933],
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

const customSvgScale: Record<number, number> = {
  291: 4,
  352: 4,
  353: 4,
  355: 4,
  357: 4,
};

const getSvg = (symbolName: string, svgIndex: number): Svg => {
  const name = symbolName.split(' ').join('');
  let svgNumber = +name.replace('Symbol', '');
  let svg = '';

  // Check if svg is in the links
  const svgLink = SVGLinks[svgNumber]?.[svgIndex];

  if (!svgLink) {
    // Missing SVG link
    throw new Error(`Missing SVG links for ${name}`);
  } else {
    svgNumber = svgLink;
  }

  try {
    // Get the svg file
    svg = fs.readFileSync(`./src/svg/Symbol${svgNumber}.svg`, 'utf8');
  } catch (error) {
    // if (svgLink) {
      throw new Error(`SVG ${svgLink} not found for ${name}. Export it and rerun the script.`);
    // }

    // Try with initial svg number
    // try {
    //   svgNumber = +name.replace('Symbol', '');
    //   svg = fs.readFileSync(`./src/svg/Symbol${svgNumber}.svg`, 'utf8');
    // } catch (error) {
    //   throw new Error(`SVG ${svgNumber} not found for ${name}. Export it and rerun the script.`);
    // }
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

  // Custom scale
  if (customSvgScale[svgNumber]) {
    object.scale = customSvgScale[svgNumber];
  }

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
          const partIdx = customIndex ? customIndex.startsWith('_p') ? customIndex : undefined : undefined;
          const colorIdx = customIndex ? customIndex.startsWith('_col') ? customIndex : undefined : undefined;

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
  const symbol = parseSymbol(json.elements?.[0]);

  return symbol;
};