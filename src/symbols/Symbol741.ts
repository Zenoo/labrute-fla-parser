import { Symbol } from '../common';
import Symbol740 from './Symbol740';
import Symbol739 from './Symbol739';
import Symbol737 from './Symbol737';

const Symbol741: Symbol = {
  "type": "symbol",
  "name": "Symbol741",
  "parts": [
    {
      ...Symbol740
    },
    {
      ...Symbol739,
      "colorIdx": 2
    },
    {
      ...Symbol737
    }
  ],
  "frames": [
    [
      {
        "type": "symbol",
        "name": "Symbol737",
        "transform": {
          "tx": 0,
          "ty": 0
        }
      },
      {
        "type": "symbol",
        "name": "Symbol739",
        "transform": {
          "tx": -9.4,
          "ty": 0.3
        }
      },
      {
        "type": "symbol",
        "name": "Symbol740",
        "transform": {
          "tx": 0,
          "ty": 0
        }
      }
    ]
  ]
};

export default Symbol741;
