import { Symbol } from '../common';
import Symbol831 from './Symbol831';
import Symbol583 from './Symbol583';

const Symbol832: Symbol = {
  "type": "symbol",
  "name": "Symbol832",
  "layers": [
    {
      "frames": [
        {
          "parts": [
            {
              ...Symbol831,
              "partIdx": 7,
              "transform": {
                "tx": 1.9,
                "ty": -0.5
              }
            }
          ]
        },
        {
          "parts": [
            {
              ...Symbol831,
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
              "colorIdx": 0,
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
        },
        {
          "parts": [
            {
              ...Symbol583,
              "colorIdx": 0,
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
  ]
};

export default Symbol832;
