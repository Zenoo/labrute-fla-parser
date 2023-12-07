import jsonview from '@pgrabovets/json-view';
import Symbols from '../src';

const rootDiv = document.createElement('div');
rootDiv.id = 'root';
document.body.appendChild(rootDiv);

jsonview.renderJSON(Symbols.Symbol545, rootDiv);