import { Symbol } from '../common';
import Symbol419 from './Symbol419';
import Symbol413 from './Symbol413';

const Symbol420: Symbol = {
  "name": "Symbol420",
  "layers": [
    {
      "frames": [
        {
          "parts": [
            {
              ...Symbol419,
              "type": "symbol",
              "partIdx": 7,
              "transform": {
                "tx": -2.75,
                "ty": 7.6
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
              ...Symbol413,
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

export default Symbol420;
