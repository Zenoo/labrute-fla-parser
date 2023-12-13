import { Symbol } from '../common';
import Symbol83 from './Symbol83';
import Symbol85 from './Symbol85';
import Symbol86 from './Symbol86';

const Symbol87: Symbol = {
  "type": "symbol",
  "name": "Symbol87",
  "parts": [
    {
      ...Symbol83
    },
    {
      ...Symbol85,
      "colorIdx": "_col3"
    },
    {
      ...Symbol86
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
        "name": "Symbol85",
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

export default Symbol87;
