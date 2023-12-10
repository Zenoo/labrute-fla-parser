import { Symbol } from '../common';
import Symbol100 from './Symbol100';
import Symbol98 from './Symbol98';

const Symbol101: Symbol = {
  "type": "symbol",
  "name": "Symbol101",
  "parts": [
    {
      ...Symbol100,
      "colorIdx": 2
    },
    {
      ...Symbol98,
      "colorIdx": 3
    }
  ],
  "frames": [
    [],
    [
      {
        "type": "symbol",
        "name": "Symbol98",
        "transform": {
          "tx": 0.95,
          "ty": -1.05
        }
      },
      {
        "type": "symbol",
        "name": "Symbol100",
        "transform": {
          "tx": -3.05,
          "ty": 0.5
        }
      }
    ]
  ]
};

export default Symbol101;
