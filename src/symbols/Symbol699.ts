import { Symbol } from '../common';
import Symbol698 from './Symbol698';
import Symbol632 from './Symbol632';
import Symbol630 from './Symbol630';

const Symbol699: Symbol = {
  "name": "Symbol699",
  "layers": [
    {
      "frames": [
        {
          "parts": [
            {
              ...Symbol698,
              "type": "symbol",
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
              ...Symbol632,
              "type": "symbol",
              "partIdx": 3,
              "transform": {
                "tx": 0.1,
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
              ...Symbol630,
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
        }
      ]
    }
  ],
  "type": "symbol"
};

export default Symbol699;
