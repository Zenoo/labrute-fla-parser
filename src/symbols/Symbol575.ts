import { Symbol } from '../common';
import { Symbol565 } from './Symbol565';
import { Symbol574 } from './Symbol574';

export const Symbol575: Symbol = {
  "type": "symbol",
  "name": "Symbol575",
  "parts": [
    {
      ...Symbol565,
      "colorIdx": "_col0"
    },
    {
      ...Symbol574,
      "partIdx": "_p7"
    }
  ],
  "frames": [
    [
      {
        "type": "symbol",
        "name": "Symbol574",
        "transform": {
          "tx": 0.55,
          "ty": 1.55
        }
      },
      {
        "type": "symbol",
        "name": "Symbol565",
        "colorOffset": {
          "r": -16,
          "g": -50,
          "b": -80
        },
        "transform": {
          "tx": 1.4,
          "ty": -12.45,
          "a": 0.9917755126953125,
          "d": 0.9917755126953125,
          "b": 0.122100830078125,
          "c": -0.122100830078125
        }
      }
    ]
  ]
};