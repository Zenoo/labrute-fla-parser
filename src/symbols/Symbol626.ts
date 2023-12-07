import { Symbol } from '../common';
import Symbol625 from './Symbol625';
import Symbol608 from './Symbol608';

const Symbol626: Symbol = {
  "name": "Symbol626",
  "layers": [
    {
      "frames": [
        {
          "parts": [
            {
              ...Symbol625,
              "partIdx": 7,
              "transform": {
                "tx": 0.55,
                "ty": 1.55,
                "a": 0.9969329833984375,
                "d": 0.9969329833984375,
                "b": -0.0749359130859375,
                "c": 0.0749359130859375
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
              ...Symbol608,
              "partIdx": 0,
              "colorOffset": {
                "r": -16,
                "g": -50,
                "b": -80
              },
              "transform": {
                "tx": 0,
                "ty": 0
              }
            }
          ]
        }
      ]
    }
  ]
};

export default Symbol626;
