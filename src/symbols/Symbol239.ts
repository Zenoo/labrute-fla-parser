import { Symbol } from '../common';
import Symbol225 from './Symbol225';
import Symbol230 from './Symbol230';
import Symbol232 from './Symbol232';
import Symbol238 from './Symbol238';
import Symbol149 from './Symbol149';

const Symbol239: Symbol = {
  "name": "Symbol239",
  "layers": [
    {
      "frames": [
        {
          "parts": [
            {
              ...Symbol225,
              "type": "symbol",
              "partIdx": 1,
              "transform": {
                "tx": 0.3,
                "ty": -11.6
              }
            }
          ]
        },
        {
          "parts": [
            {
              ...Symbol230,
              "type": "symbol",
              "partIdx": 1,
              "transform": {
                "tx": -0.35,
                "ty": 0.6
              }
            }
          ]
        },
        {
          "parts": [
            {
              ...Symbol232,
              "type": "symbol",
              "partIdx": 2,
              "transform": {
                "tx": 0.15,
                "ty": -10.4
              }
            }
          ]
        },
        {
          "parts": [
            {
              ...Symbol238,
              "type": "symbol",
              "partIdx": 1,
              "transform": {
                "tx": -6.6,
                "ty": -30.35
              }
            }
          ]
        },
        {
          "parts": [
            {
              ...Symbol149,
              "type": "symbol",
              "partIdx": 2,
              "colorOffset": {
                "r": -110,
                "g": -90,
                "b": -80
              },
              "transform": {
                "tx": 0.55,
                "ty": -12.75,
                "a": 1.0773162841796875,
                "d": 1.03216552734375
              }
            }
          ]
        }
      ]
    }
  ],
  "type": "symbol"
};

export default Symbol239;
