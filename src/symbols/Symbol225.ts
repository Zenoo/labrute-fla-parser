import { Symbol } from '../common';
import Symbol224 from './Symbol224';
import Symbol222 from './Symbol222';

const Symbol225: Symbol = {
  "type": "symbol",
  "name": "Symbol225",
  "layers": [
    {
      "frames": [
        null,
        {
          "parts": [
            {
              ...Symbol224,
              "colorIdx": 2,
              "transform": {
                "tx": 0,
                "ty": 9.5,
                "a": 1.1502838134765625,
                "d": 1.2355804443359375,
                "b": -0.335205078125,
                "c": 0
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
              ...Symbol222,
              "colorIdx": 3,
              "transform": {
                "tx": 0,
                "ty": 1.25
              }
            }
          ]
        },
        {
          "parts": [
            {
              ...Symbol222,
              "colorIdx": 3,
              "transform": {
                "tx": 0,
                "ty": 1.25
              }
            }
          ]
        }
      ]
    }
  ]
};

export default Symbol225;
