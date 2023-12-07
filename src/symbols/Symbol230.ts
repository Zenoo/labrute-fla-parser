import { Symbol } from '../common';
import Symbol161 from './Symbol161';
import Symbol227 from './Symbol227';

const Symbol230: Symbol = {
  "name": "Symbol230",
  "layers": [
    {
      "frames": [
        {
          "parts": [
            ""
          ]
        }
      ]
    },
    {
      "frames": [
        {
          "parts": [
            ""
          ]
        },
        {
          "parts": [
            {
              ...Symbol161,
              "partIdx": 2,
              "transform": {
                "tx": -1,
                "ty": 0.25
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
              ...Symbol227,
              "partIdx": 3,
              "transform": {
                "tx": 0,
                "ty": 0,
                "a": 0.86419677734375,
                "d": 0.86419677734375
              }
            }
          ]
        },
        {
          "parts": [
            {
              ...Symbol227,
              "partIdx": 3,
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

export default Symbol230;
