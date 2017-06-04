$(function () {

    GetTornei();

    //$("#Votanti").click(function () {

    //    GetVotanti();

    //});

    //$(".aggiornaVotanti").click(function () {

    //    GetVotanti();

    //});
       
});

function GetTornei() {
    //$("#footerRisultati").loader({ html: "<span class='ui-icon ui-icon-loading'><img src='jquery-logo.png' /><h2>is loading for you ...</h2></span>" });
    var risultati;
   
    $.ajax({
        type: "POST",
        crossDomain: true,
        contentType: "application/json; charset=utf-8",
        //url: "https://webservices.comune.parma.it/APPPM/WS_ACI/GetAci",
//        url: "Ws_AppElezioni.asmx/GetVotanti",
        url: urlTornei,
        cache: false,
        //jsonpCallback: 'risposta',
        // jsonp: 'callback',
        // dataType: "jsonp",            
        async: true,
        //            data: "idDisciplina=" + idDisciplina,
        data: JSON.stringify({}),
        //data: { NomeOrdinanza: NomeOrdinanza, DataPubbDa: DataPubbDa, DataPubbA: DataPubbA, DataScadDa: DataScadDa, DataScadA: DataScadA },
        error: function (data) {
            console.log(data.responseText)
        },
        beforeSend: function () { $('#elencoTornei').html(''); $.mobile.loading('show'); }, //Show spinner
        complete: function () { $.mobile.loading('hide'); }, //Hide spinner
        success: function (response) {
            risultati = response.d;
            //corsiGlobal = response.d;           
            var dettaglio = '';
            console.log(risultati);
            for (var i = 0; i < risultati.length; i++) {
               
                    dettaglio = dettaglio + '<li>' +
                                    '<a href="#dettTorneo">' +
                                    '<img src="themes/images/volleyball_64.png" alt="' + risultati[i].Nometorneo + '" />' +
                                    '<h2>' + risultati[i].Nometorneo + '</h2>' +
                                    '<p>' + risultati[i].Luogo + '</p>' +
                                    '</a>' +
                                   
                                '</li>';                                
            }

            $('#elencoTornei').empty();
            $('#elencoTornei').append($(dettaglio));
            $('#elencoTornei').trigger('create');
            $('#elencoTornei').listview('refresh');
            $('#elencoTornei ul').listview('refresh');
            //$('#elencoTornei').html(dettaglio);
            //$('#tabellaRisultatiResidenti').DataTable();

        }

    })
}