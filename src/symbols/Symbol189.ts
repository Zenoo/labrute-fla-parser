import { Symbol } from '../common';
import Symbol188 from './Symbol188';
import Symbol186 from './Symbol186';
import Symbol185 from './Symbol185';

const Symbol189: Symbol = {
  "type": "symbol",
  "name": "Symbol189",
  "parts": [
    {
      ...Symbol188,
      "colorIdx": 3
    },
    {
      ...Symbol186
    },
    {
      ...Symbol185,
      "partIdx": 1
    }
  ],
  "frames": [
    [
      {
        "type": "symbol",
        "name": "Symbol185",
        "transform": {
          "tx": 0,
          "ty": 0
        }
      }
    ],
    [],
    [
      {
        "type": "symbol",
        "name": "Symbol186",
        "transform": {
          "tx": 0,
          "ty": 0
        }
      }
    ],
    [],
    [],
    [
      {
        "type": "symbol",
        "name": "Symbol188",
        "transform": {
          "tx": -0.55,
          "ty": -1.6
        }
      }
    ]
  ]
};

export default Symbol189;
