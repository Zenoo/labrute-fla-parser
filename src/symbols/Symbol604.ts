import { Symbol } from '../common';
import Symbol603 from './Symbol603';
import Symbol601 from './Symbol601';
import Symbol599 from './Symbol599';

const Symbol604: Symbol = {
  "type": "symbol",
  "name": "Symbol604",
  "parts": [
    {
      ...Symbol603,
      "colorIdx": 4
    },
    {
      ...Symbol601,
      "colorIdx": 3
    },
    {
      ...Symbol599,
      "colorIdx": 4
    }
  ],
  "frames": [
    [],
    [
      {
        "type": "symbol",
        "name": "Symbol603",
        "transform": {
          "tx": 48.8,
          "ty": 14.95
        }
      },
      {
        "type": "symbol",
        "name": "Symbol601",
        "transform": {
          "tx": 0,
          "ty": 0
        }
      },
      {
        "type": "symbol",
        "name": "Symbol599",
        "transform": {
          "tx": 45,
          "ty": 14.5
        }
      }
    ]
  ]
};

export default Symbol604;
