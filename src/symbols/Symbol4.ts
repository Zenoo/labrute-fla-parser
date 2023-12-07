import { Symbol } from '../common';
import Symbol3 from './Symbol3';

const Symbol4: Symbol = {
  "name": "Symbol4",
  "layers": [
    {
      "frames": [
        {
          "parts": [
            {
              ...Symbol3,
              "type": "symbol",
              "partIdx": 0,
              "colorOffset": {
                "r": 45,
                "g": -16,
                "b": -92
              },
              "transform": {
                "tx": 0,
                "ty": -0.25,
                "a": 0.20111083984375,
                "d": 0.20111083984375
              }
            }
          ]
        }
      ]
    }
  ],
  "type": "symbol"
};

export default Symbol4;
