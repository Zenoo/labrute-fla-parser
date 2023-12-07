import { Symbol } from '../common';
import Symbol135 from './Symbol135';
import Symbol133 from './Symbol133';

const Symbol137: Symbol = {
  "name": "Symbol137",
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
              ...Symbol135,
              "type": "symbol",
              "partIdx": 2,
              "transform": {
                "tx": 0,
                "ty": 2.95
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
              ...Symbol133,
              "type": "symbol",
              "partIdx": 3,
              "transform": {
                "tx": -3.95,
                "ty": -1.45
              }
            }
          ]
        }
      ]
    }
  ],
  "type": "symbol"
};

export default Symbol137;
