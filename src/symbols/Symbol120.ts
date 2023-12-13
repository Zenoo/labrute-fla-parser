import { Symbol } from '../common';
import Symbol119 from './Symbol119';
import Symbol117 from './Symbol117';
import Symbol115 from './Symbol115';

const Symbol120: Symbol = {
  "type": "symbol",
  "name": "Symbol120",
  "parts": [
    {
      ...Symbol119,
      "colorIdx": "_col3"
    },
    {
      ...Symbol117
    },
    {
      ...Symbol115,
      "partIdx": "_p1"
    }
  ],
  "frames": [
    [
      {
        "type": "symbol",
        "name": "Symbol115",
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
        "name": "Symbol117",
        "transform": {
          "tx": 25.4,
          "ty": -3.4
        }
      }
    ],
    [],
    [],
    [
      {
        "type": "symbol",
        "name": "Symbol119",
        "transform": {
          "tx": -1.65,
          "ty": -0.6
        }
      }
    ]
  ]
};

export default Symbol120;
