import { Symbol } from '../common';
import Symbol729 from './Symbol729';
import Symbol702 from './Symbol702';

const Symbol730: Symbol = {
  "type": "symbol",
  "name": "Symbol730",
  "parts": [
    {
      ...Symbol729,
      "partIdx": 7
    },
    {
      ...Symbol702,
      "colorIdx": 0
    }
  ],
  "frames": [
    [
      {
        "type": "symbol",
        "name": "Symbol702",
        "colorOffset": {
          "r": -16,
          "g": -50,
          "b": -80
        },
        "transform": {
          "tx": 0,
          "ty": 0
        }
      },
      {
        "type": "symbol",
        "name": "Symbol729",
        "transform": {
          "tx": 3.9,
          "ty": 7.1
        }
      }
    ],
    [
      {
        "type": "symbol",
        "name": "Symbol702",
        "colorOffset": {
          "r": -16,
          "g": -50,
          "b": -80
        },
        "transform": {
          "tx": 0,
          "ty": 0
        }
      },
      {
        "type": "symbol",
        "name": "Symbol729",
        "transform": {
          "tx": 3.9,
          "ty": 7.1
        }
      }
    ]
  ]
};

export default Symbol730;
