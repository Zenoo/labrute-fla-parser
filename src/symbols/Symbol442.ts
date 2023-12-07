import { Symbol } from '../common';
import Symbol440 from './Symbol440';
import Symbol438 from './Symbol438';

const Symbol442: Symbol = {
  "type": "symbol",
  "name": "Symbol442",
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
              ...Symbol440,
              "partIdx": 2,
              "transform": {
                "tx": 1.6,
                "ty": 2.4
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
              ...Symbol438,
              "partIdx": 3,
              "transform": {
                "tx": -0.75,
                "ty": 0
              }
            }
          ]
        }
      ]
    }
  ]
};

export default Symbol442;
