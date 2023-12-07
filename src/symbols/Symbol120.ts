import { Symbol } from '../common';
import Symbol115 from './Symbol115';
import Symbol117 from './Symbol117';
import Symbol119 from './Symbol119';

const Symbol120: Symbol = {
  "type": "symbol",
  "name": "Symbol120",
  "layers": [
    {
      "frames": [
        {
          "parts": [
            {
              ...Symbol115,
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
  ]
};

export default Symbol120;
