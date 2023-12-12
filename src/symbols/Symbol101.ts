import { Symbol } from '../common';
import Symbol98 from './Symbol98';
import Symbol100 from './Symbol100';

const Symbol101: Symbol = {
  "type": "symbol",
  "name": "Symbol101",
  "parts": [
    {
      ...Symbol98,
      "colorIdx": 3
    },
    {
      ...Symbol100,
      "colorIdx": 2
    }
  ],
  "frames": [
    [],
    [
      {
        "type": "symbol",
        "name": "Symbol100",
        "transform": {
          "tx": -3.05,
          "ty": 0.5
        }
      },
      {
        "type": "symbol",
        "name": "Symbol98",
        "transform": {
          "tx": 0.95,
          "ty": -1.05
        }
      }
    ]
  ]
};

export default Symbol101;
