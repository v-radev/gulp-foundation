var jQuery = $ = require('jquery');
window.jQuery = jQuery;
window.$ = jQuery;
var logLorem = require('./modules/logLorem');
var logAmet = require('../global/common/logAmet');

$(document).ready(function(){
  logLorem();
  logAmet();
});
