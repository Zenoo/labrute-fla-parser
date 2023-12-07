import { Symbol } from '../common';
import Symbol100 from './Symbol100';
import Symbol98 from './Symbol98';

const Symbol101: Symbol = {
  "name": "Symbol101",
  "layers": [
    {
      "frames": [
        {
          "parts": [
            {
              ...Symbol100,
              "type": "symbol",
              "partIdx": 2,
              "transform": {
                "tx": -3.05,
                "ty": 0.5
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
              ...Symbol98,
              "type": "symbol",
              "partIdx": 3,
              "transform": {
                "tx": 0.95,
                "ty": -1.05
              }
            }
          ]
        }
      ]
    }
  ],
  "type": "symbol"
};

export default Symbol101;
