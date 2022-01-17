
const fs = require('fs')

import * as fs from 'fs'

// @filename: fruits.ts

function createBanana() {}

// module.exports = createBanana
export = createBanana

// 

import createBanana = require('./fruits')
import * as createBanana from './fruits'

esModuleInterop // ..

