import { Symbol } from '../common';
import Symbol115 from './Symbol115';
import Symbol117 from './Symbol117';
import Symbol119 from './Symbol119';

const Symbol120: Symbol = {
  "name": "Symbol120",
  "layers": [
    {
      "frames": [
        {
          "parts": [
            {
              ...Symbol115,
              "type": "symbol",
              "partIdx": 1,
              "transform": {
                "tx": 0,
                "ty": 0
              }
            }
          ]
        },
        {
          "parts": [
            {
              ...Symbol117,
              "type": "symbol",
              "transform": {
                "tx": 25.4,
                "ty": -3.4
              }
            }
          ]
        },
        {
          "parts": [
            {
              ...Symbol119,
              "type": "symbol",
              "partIdx": 3,
              "transform": {
                "tx": -1.65,
                "ty": -0.6
              }
            }
          ]
        }
      ]
    }
  ],
  "type": "symbol"
};

export default Symbol120;
