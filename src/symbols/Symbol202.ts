import { Symbol } from '../common';
import Symbol200 from './Symbol200';
import Symbol198 from './Symbol198';

const Symbol202: Symbol = {
  "name": "Symbol202",
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
            {
              ...Symbol200,
              "partIdx": 2,
              "transform": {
                "tx": 0,
                "ty": 3
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
              ...Symbol198,
              "partIdx": 3,
              "transform": {
                "tx": 0.25,
                "ty": -1.75
              }
            }
          ]
        }
      ]
    }
  ]
};

export default Symbol202;
