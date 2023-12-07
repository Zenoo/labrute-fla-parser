import { Symbol } from '../common';
import Symbol645 from './Symbol645';
import Symbol632 from './Symbol632';
import Symbol630 from './Symbol630';

const Symbol646: Symbol = {
  "name": "Symbol646",
  "layers": [
    {
      "frames": [
        {
          "parts": [
            {
              ...Symbol645,
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
                "tx": 0,
                "ty": 0
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

export default Symbol646;
