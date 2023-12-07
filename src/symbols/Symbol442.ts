import { Symbol } from '../common';
import Symbol440 from './Symbol440';
import Symbol438 from './Symbol438';

const Symbol442: Symbol = {
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
              "type": "symbol",
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
              "type": "symbol",
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
  ],
  "type": "symbol"
};

export default Symbol442;
