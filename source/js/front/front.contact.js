var jQuery = $ = require('jquery');
window.jQuery = jQuery;
window.$ = jQuery;
var logMonth = require('./modules/logMonth');

$(document).ready(function(){
  logMonth();
});
