import { Symbol } from '../common';
import Symbol200 from './Symbol200';
import Symbol198 from './Symbol198';

const Symbol202: Symbol = {
  "type": "symbol",
  "name": "Symbol202",
  "layers": [
    {
      "frames": [
        null,
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
        null,
        {
          "parts": [
            {
              ...Symbol200,
              "colorIdx": 2,
              "transform": {
                "tx": 0,
                "ty": 3
              }
            }
          ]
        }
      ]
    },
    {
      "frames": [
        null,
        {
          "parts": [
            {
              ...Symbol198,
              "colorIdx": 3,
              "transform": {
                "tx": 0.25,
                "ty": -1.75
              }
            }
          ]
        }
      ]
    }
  ]
};

export default Symbol202;
