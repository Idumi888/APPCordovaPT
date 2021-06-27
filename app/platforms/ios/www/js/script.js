

$(document).ready(function() {
    var login = document.getElementById("login");
    function connexion(){
    var request= $.ajax({
    url: "http://serveur1.arras-sio.com/symfony4-4055/PT-CSAPO-SAN/public/api/utilisateurs",
    method: "GET",
    dataType: "json",
    beforeSend: function( xhr ) {
       xhr.overrideMimeType( "application/json; charset=utf-8" );
    }});
    request.done(function( msg ) {
       $.each(msg, function(index,e){
       console.log(e.username);
       if( login.value == e.username){
           login.value = 'gg';
       }
      
       });
    });
    // Fonction qui se lance lorsque l’accès au web service provoque une erreur
    request.fail(function( jqXHR, textStatus ) {
    alert ('erreur');
    });
    }
    // Appel de la fonction ajax
    
    });