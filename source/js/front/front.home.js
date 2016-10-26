var jQuery = $ = require('jquery');
window.jQuery = jQuery;
window.$ = jQuery;
var colorpicker = require('spectrum-colorpicker');
var logDate = require('./modules/logDate');

$(document).ready(function(){
  logDate();
});
