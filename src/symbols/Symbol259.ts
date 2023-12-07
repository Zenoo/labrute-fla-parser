import { Symbol } from '../common';
import Symbol256 from './Symbol256';
import Symbol258 from './Symbol258';
import Symbol253 from './Symbol253';

const Symbol259: Symbol = {
  "type": "symbol",
  "name": "Symbol259",
  "layers": [
    {
      "frames": [
        {
          "parts": [
            {
              ...Symbol256,
              "partIdx": 1,
              "transform": {
                "tx": -1.25,
                "ty": -6.65,
                "b": 0.1340179443359375,
                "c": 0
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
              ...Symbol258,
              "partIdx": 1,
              "transform": {
                "tx": 0.2,
                "ty": 3.7,
                "b": 0.2081298828125,
                "c": 0
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
              "type": "svg",
              "svg": "MISSING",
              "offset": {
                "x": 0,
                "y": 0
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
              ...Symbol253,
              "partIdx": 2,
              "transform": {
                "tx": 1.1,
                "ty": -0.65,
                "a": 0.99102783203125,
                "d": 1,
                "b": 0.2448577880859375,
                "c": -0.0366363525390625
              }
            }
          ]
        }
      ]
    }
  ]
};

export default Symbol259;
