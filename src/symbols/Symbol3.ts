import { Symbol } from '../common';
import Symbol2 from './Symbol2';

const Symbol3: Symbol = {
  "type": "symbol",
  "name": "Symbol3",
  "layers": [
    {
      "frames": [
        {
          "parts": [
            {
              ...Symbol2,
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

export default Symbol3;
