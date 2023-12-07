import { Symbol } from '../common';
import Symbol640 from './Symbol640';

const Symbol642: Symbol = {
  "type": "symbol",
  "name": "Symbol642",
  "layers": [
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
              ...Symbol640,
              "colorIdx": 4,
              "transform": {
                "tx": -0.6,
                "ty": 0.85,
                "a": 0.7071075439453125,
                "d": 0.7071075439453125,
                "b": -0.7071075439453125,
                "c": 0.707122802734375
              }
            }
          ]
        }
      ]
    }
  ]
};

export default Symbol642;
