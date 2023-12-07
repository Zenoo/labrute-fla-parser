import { Symbol } from '../common';
import Symbol603 from './Symbol603';
import Symbol601 from './Symbol601';
import Symbol599 from './Symbol599';

const Symbol604: Symbol = {
  "name": "Symbol604",
  "layers": [
    {
      "frames": [
        {
          "parts": [
            {
              ...Symbol603,
              "partIdx": 4,
              "transform": {
                "tx": 48.8,
                "ty": 14.95
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
              ...Symbol601,
              "partIdx": 3,
              "transform": {
                "tx": 0,
                "ty": 0
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
              ...Symbol599,
              "partIdx": 4,
              "transform": {
                "tx": 45,
                "ty": 14.5
              }
            }
          ]
        }
      ]
    }
  ]
};

export default Symbol604;
