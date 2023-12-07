import { Symbol } from '../common';
import Symbol605 from './Symbol605';
import Symbol597 from './Symbol597';
import Symbol595 from './Symbol595';

const Symbol606: Symbol = {
  "name": "Symbol606",
  "layers": [
    {
      "frames": [
        {
          "parts": [
            {
              ...Symbol605,
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
              ...Symbol597,
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
              ...Symbol595,
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

export default Symbol606;
