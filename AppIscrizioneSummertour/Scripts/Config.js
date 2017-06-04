//var tipoDiAmbiente = 'locale';
var tipoDiAmbiente = 'prod';

if (tipoDiAmbiente == 'locale') {
    var urlImmagini = '';
    var urlTornei = 'WS_AppSummertour.asmx/GetElencoTornei';
  
}


if (tipoDiAmbiente == 'prod') {
    var urlImmagini = 'http://www.giacomorabaglia.com/appIscrizioneSummertour/';
    var urlTornei = 'http://www.giacomorabaglia.com/appIscrizioneSummertour/WS_AppSummertour.asmx/GetElencoTornei';
   
}