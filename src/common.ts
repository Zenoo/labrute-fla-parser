export type Svg = string;

export type Frame = {
  parts: (Symbol | Svg)[];
};

export type Layer = {
  frames: Frame[];
};

export type Symbol = {
  name: string;
  partIdx?: number;
  layers: Layer[];
  transform?: {
    tx?: number;
    ty?: number;
    a?: number;
    d?: number;
    b?: number;
    c?: number;
  };
  colorOffset?: {
    r: number;
    g: number;
    b: number;
  };
}