import { Symbol } from '../common';
import Symbol213 from './Symbol213';
import Symbol214 from './Symbol214';

const Symbol215: Symbol = {
  "name": "Symbol215",
  "layers": [
    {
      "frames": [
        {
          "parts": [
            {
              ...Symbol213,
              "type": "symbol",
              "partIdx": 3,
              "transform": {
                "tx": 0.15,
                "ty": -8.3
              }
            }
          ]
        },
        {
          "parts": [
            {
              ...Symbol214,
              "type": "symbol",
              "partIdx": 1,
              "transform": {
                "tx": 0.25,
                "ty": -8.35
              }
            }
          ]
        }
      ]
    }
  ],
  "type": "symbol"
};

export default Symbol215;
