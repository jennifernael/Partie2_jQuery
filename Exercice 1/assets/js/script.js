$(document).ready(function(){
  // = $(function(){

  $("#picture").mouseover(function() {
    //l'image grandit de 50px quand le curseur de la souris passe dessus
  $("#picture").css("width" , "+=50px");   //incrémentation de la taille (de + 50 px ici) de l'image sans qu'on l'ai récupérée

}) 

  $("#picture").mouseout(function() {
    //l'image rétrécit de 50px quand le curseur de la souris s'en va
  $("#picture").css("width" , "-=50px");   //incrémentation de la taille (de - 50 px ici) de l'image sans qu'on l'ai récupérée
  
})

});
