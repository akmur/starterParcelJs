/* global document sweetAlert */

import $ from 'jquery'
import main from './main'
import './sweet-alert'

document.addEventListener('DOMContentLoaded', () => {
  const myConst = 'test ES6 transpiling'
  main.init() // testing my custom module
  console.log($, myConst) // testing jQuery and transpiling
  sweetAlert('Hello world!') // testing old skool external plugin import
})
