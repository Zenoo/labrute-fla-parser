import { Symbol } from '../common';
import Symbol1 from './Symbol1';

const Symbol2: Symbol = {
  "name": "Symbol2",
  "layers": [
    {
      "frames": [
        {
          "parts": [
            {
              ...Symbol1,
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

export default Symbol2;
