// named import
import { strawberry, raspberry } from "./berries";

// default import
import wiwi from "./kiwi";

export function makeFruitSalad() {}
// import {makeFruitSalad} from './es-module'

export default class FruitBasket {}
// import Basket from './es-module'

// /fruit/berries.js
function a() {}

function b() {}

export { a, b };

import * as allBerries from "./berries";

allBerries.strawberry;
allBerries.raspberry;

// /fruit/index.js
// export * from './berries'

// import {strawberry, raspberry} from 'fruit'
