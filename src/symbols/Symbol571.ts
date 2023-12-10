import { Symbol } from '../common';
import Symbol570 from './Symbol570';
import Symbol568 from './Symbol568';

const Symbol571: Symbol = {
  "type": "symbol",
  "name": "Symbol571",
  "parts": [
    {
      ...Symbol570,
      "colorIdx": 3
    },
    {
      ...Symbol568,
      "colorIdx": 2
    }
  ],
  "frames": [
    [],
    [
      {
        "type": "symbol",
        "name": "Symbol570",
        "transform": {
          "tx": 20.55,
          "ty": -0.25,
          "a": -1,
          "d": 1
        }
      },
      {
        "type": "symbol",
        "name": "Symbol568",
        "transform": {
          "tx": 14.5,
          "ty": -1,
          "a": -1,
          "d": 1
        }
      }
    ]
  ]
};

export default Symbol571;
