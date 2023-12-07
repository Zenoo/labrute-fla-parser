import { Symbol } from '../common';
import Symbol831 from './Symbol831';
import Symbol583 from './Symbol583';

const Symbol832: Symbol = {
  "name": "Symbol832",
  "layers": [
    {
      "frames": [
        {
          "parts": [
            {
              ...Symbol831,
              "type": "symbol",
              "partIdx": 7,
              "transform": {
                "tx": 1.9,
                "ty": -0.5
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
              ...Symbol583,
              "type": "symbol",
              "partIdx": 0,
              "colorOffset": {
                "r": -16,
                "g": -50,
                "b": -80
              },
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

export default Symbol832;
