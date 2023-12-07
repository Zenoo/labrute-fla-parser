import { Symbol } from '../common';
import Symbol100 from './Symbol100';
import Symbol98 from './Symbol98';

const Symbol101: Symbol = {
  "type": "symbol",
  "name": "Symbol101",
  "layers": [
    {
      "frames": [
        null,
        {
          "parts": [
            {
              ...Symbol100,
              "colorIdx": 2,
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
        null,
        {
          "parts": [
            {
              ...Symbol98,
              "colorIdx": 3,
              "transform": {
                "tx": 0.95,
                "ty": -1.05
              }
            }
          ]
        }
      ]
    }
  ]
};

export default Symbol101;
