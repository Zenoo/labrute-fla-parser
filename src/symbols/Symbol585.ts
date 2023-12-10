import { Symbol } from '../common';
import Symbol86 from './Symbol86';
import Symbol584 from './Symbol584';
import Symbol83 from './Symbol83';

const Symbol585: Symbol = {
  "type": "symbol",
  "name": "Symbol585",
  "parts": [
    {
      ...Symbol86
    },
    {
      ...Symbol584,
      "colorIdx": 3
    },
    {
      ...Symbol83
    }
  ],
  "frames": [
    [],
    [
      {
        "type": "symbol",
        "name": "Symbol86",
        "transform": {
          "tx": 0,
          "ty": 0
        }
      },
      {
        "type": "symbol",
        "name": "Symbol584",
        "transform": {
          "tx": -0.9,
          "ty": -0.55,
          "a": 3.4643096923828125,
          "d": 2.7031707763671875,
          "b": -1.29888916015625,
          "c": 0.6588897705078125
        }
      },
      {
        "type": "symbol",
        "name": "Symbol83",
        "transform": {
          "tx": 0,
          "ty": 0
        }
      }
    ]
  ]
};

export default Symbol585;
