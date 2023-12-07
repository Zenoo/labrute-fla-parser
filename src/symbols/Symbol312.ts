import { Symbol } from '../common';
import Symbol310 from './Symbol310';
import Symbol308 from './Symbol308';
import Symbol306 from './Symbol306';

const Symbol312: Symbol = {
  "type": "symbol",
  "name": "Symbol312",
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
              ...Symbol310,
              "partIdx": 2,
              "transform": {
                "tx": -1.95,
                "ty": 2.8
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
              ...Symbol308,
              "partIdx": 3,
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
              ...Symbol306,
              "partIdx": 2,
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

export default Symbol312;
