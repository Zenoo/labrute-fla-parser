import { Symbol } from '../common';
import Symbol95 from './Symbol95';
import Symbol93 from './Symbol93';

const Symbol96: Symbol = {
  "name": "Symbol96",
  "layers": [
    {
      "frames": [
        {
          "parts": [
            {
              ...Symbol95,
              "partIdx": 2,
              "transform": {
                "tx": 1.6,
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
              ...Symbol93,
              "partIdx": 3,
              "transform": {
                "tx": -2,
                "ty": -6.85
              }
            }
          ]
        }
      ]
    }
  ]
};

export default Symbol96;
