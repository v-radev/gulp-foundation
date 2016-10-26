var jQuery = $ = require('jquery');
window.jQuery = jQuery;
window.$ = jQuery;
var logIpsum = require('./modules/logIpsum');

$(document).ready(function(){
  logIpsum();
});
