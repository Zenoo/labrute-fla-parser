import { Symbol } from '../common';
import Symbol660 from './Symbol660';
import Symbol652 from './Symbol652';
import Symbol650 from './Symbol650';

const Symbol661: Symbol = {
  "type": "symbol",
  "name": "Symbol661",
  "layers": [
    {
      "frames": [
        {
          "parts": [
            {
              ...Symbol660,
              "partIdx": 7,
              "transform": {
                "tx": -2.95,
                "ty": -1.5
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
              ...Symbol652,
              "colorIdx": 0,
              "colorOffset": {
                "r": -16,
                "g": -50,
                "b": -80
              },
              "transform": {
                "tx": -3.4,
                "ty": -3.3
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
              ...Symbol650,
              "partIdx": 7,
              "transform": {
                "tx": -5.35,
                "ty": 21.3
              }
            }
          ]
        }
      ]
    }
  ]
};

export default Symbol661;
