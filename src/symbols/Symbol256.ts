import { Symbol } from '../common';
import Symbol255 from './Symbol255';

const Symbol256: Symbol = {
  "name": "Symbol256",
  "layers": [
    {
      "frames": [
        {
          "parts": [
            {
              ...Symbol255,
              "type": "symbol",
              "transform": {
                "tx": 0,
                "ty": 0
              }
            }
          ]
        }
      ]
    }
  ],
  "type": "symbol"
};

export default Symbol256;
