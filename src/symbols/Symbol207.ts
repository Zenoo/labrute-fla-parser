import { Symbol } from '../common';
import Symbol206 from './Symbol206';
import Symbol124 from './Symbol124';
import Symbol145 from './Symbol145';

const Symbol207: Symbol = {
  "name": "Symbol207",
  "layers": [
    {
      "frames": [
        {
          "parts": [
            {
              ...Symbol206,
              "type": "symbol",
              "partIdx": 7,
              "transform": {
                "tx": 0.55,
                "ty": 1.55
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
              ...Symbol124,
              "type": "symbol",
              "partIdx": 0,
              "colorOffset": {
                "r": -16,
                "g": -50,
                "b": -80
              },
              "transform": {
                "tx": 0,
                "ty": 0
              }
            }
          ]
        },
        {
          "parts": [
            {
              ...Symbol145,
              "type": "symbol",
              "partIdx": 3,
              "colorOffset": {
                "r": -16,
                "g": -50,
                "b": -80
              },
              "transform": {
                "tx": 0,
                "ty": 0
              }
            }
          ]
        }
      ]
    }
  ],
  "type": "symbol"
};

export default Symbol207;
