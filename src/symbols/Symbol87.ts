import { Symbol } from '../common';
import Symbol86 from './Symbol86';
import Symbol85 from './Symbol85';
import Symbol83 from './Symbol83';

const Symbol87: Symbol = {
  "name": "Symbol87",
  "layers": [
    {
      "frames": [
        {
          "parts": [
            {
              ...Symbol86,
              "type": "symbol",
              "transform": {
                "tx": 0,
                "ty": 0
              }
            }
          ]
        }
      ]
    },
    {
      "frames": [
        {
          "parts": [
            {
              ...Symbol85,
              "type": "symbol",
              "partIdx": 3,
              "transform": {
                "tx": -0.9,
                "ty": -0.55,
                "a": 3.4643096923828125,
                "d": 2.7031707763671875,
                "b": -1.29888916015625,
                "c": 0.6588897705078125
              }
            }
          ]
        }
      ]
    },
    {
      "frames": [
        {
          "parts": [
            {
              ...Symbol83,
              "type": "symbol",
              "transform": {
                "tx": 0,
                "ty": 0
              }
            }
          ]
        }
      ]
    }
  ],
  "type": "symbol"
};

export default Symbol87;
