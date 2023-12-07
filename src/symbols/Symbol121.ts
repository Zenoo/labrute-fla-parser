import { Symbol } from '../common';
import Symbol120 from './Symbol120';
import Symbol110 from './Symbol110';
import Symbol108 from './Symbol108';

const Symbol121: Symbol = {
  "name": "Symbol121",
  "layers": [
    {
      "frames": [
        {
          "parts": [
            {
              ...Symbol120,
              "type": "symbol",
              "partIdx": 7,
              "transform": {
                "tx": 5.2,
                "ty": 0.75
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
              ...Symbol110,
              "type": "symbol",
              "partIdx": 0,
              "colorOffset": {
                "r": -16,
                "g": -50,
                "b": -80
              },
              "transform": {
                "tx": 4.3,
                "ty": -0.3
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
              ...Symbol108,
              "type": "symbol",
              "partIdx": 7,
              "transform": {
                "tx": 4.95,
                "ty": 17.85
              }
            }
          ]
        }
      ]
    }
  ],
  "type": "symbol"
};

export default Symbol121;
