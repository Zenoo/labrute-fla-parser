import { Symbol } from '../common';
import Symbol729 from './Symbol729';
import Symbol702 from './Symbol702';

const Symbol730: Symbol = {
  "type": "symbol",
  "name": "Symbol730",
  "layers": [
    {
      "frames": [
        {
          "parts": [
            {
              ...Symbol729,
              "partIdx": 7,
              "transform": {
                "tx": 3.9,
                "ty": 7.1
              }
            }
          ]
        },
        {
          "parts": [
            {
              ...Symbol729,
              "partIdx": 7,
              "transform": {
                "tx": 3.9,
                "ty": 7.1
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
              ...Symbol702,
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
              ...Symbol702,
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

export default Symbol730;
