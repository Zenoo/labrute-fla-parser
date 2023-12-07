import { Symbol } from '../common';
import Symbol239 from './Symbol239';
import Symbol220 from './Symbol220';
import Symbol149 from './Symbol149';

const Symbol240: Symbol = {
  "type": "symbol",
  "name": "Symbol240",
  "layers": [
    {
      "frames": [
        {
          "parts": [
            {
              ...Symbol239,
              "partIdx": 7,
              "transform": {
                "tx": -0.05,
                "ty": 12.75
              }
            }
          ]
        },
        {
          "parts": [
            {
              ...Symbol239,
              "partIdx": 7,
              "transform": {
                "tx": -0.05,
                "ty": 12.75
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
              ...Symbol220,
              "colorIdx": 3,
              "transform": {
                "tx": 0.1,
                "ty": -0.3
              }
            }
          ]
        },
        null
      ]
    },
    {
      "frames": [
        {
          "parts": [
            {
              ...Symbol149,
              "colorIdx": 0,
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
              ...Symbol149,
              "colorIdx": 3,
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
  ]
};

export default Symbol240;
