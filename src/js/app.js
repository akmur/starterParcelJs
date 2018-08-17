/* global document sweetAlert */
import '../scss/main.scss'
import $ from 'jquery'
import main from './main'
import './sweet-alert'

document.addEventListener('DOMContentLoaded', () => {
  const welcomeMessage = 'Welcome to starterParcel'
  main.init() // testing my custom module
  $('.js-title').text(welcomeMessage) // testing jQuery and transpiling
  sweetAlert('Old skool plugin works too!') // testing old skool external plugin import
})
