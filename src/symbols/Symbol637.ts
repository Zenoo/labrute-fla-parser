import { Symbol } from '../common';
import Symbol632 from './Symbol632';
import Symbol630 from './Symbol630';

const Symbol637: Symbol = {
  "type": "symbol",
  "name": "Symbol637",
  "layers": [
    {
      "frames": [
        {
          "parts": [
            {
              "type": "svg",
              "svg": "MISSING",
              "offset": {
                "x": 0,
                "y": 0
              }
            }
          ]
        }
      ]
    },
    {
      "frames": [
        {
          "parts": [
            {
              ...Symbol632,
              "partIdx": 2,
              "transform": {
                "tx": 0.15,
                "ty": 3.9
              }
            }
          ]
        },
        {
          "parts": [
            {
              ...Symbol630,
              "partIdx": 2,
              "colorOffset": {
                "r": -16,
                "g": -50,
                "b": -80
              },
              "transform": {
                "tx": 0.15,
                "ty": 3.8,
                "a": 1.02056884765625,
                "d": 1.0026702880859375
              }
            }
          ]
        }
      ]
    }
  ]
};

export default Symbol637;
