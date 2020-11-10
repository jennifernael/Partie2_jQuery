   //déclanchement fonction au chargement grâce au .ready qui indique qu'on est sur du jQuery
   $(function(){

//Dès qu'on passe sur #firstTextRed, on applique la couleur au firstText
$('#firstTextRed').hover(function(){
    $('#firstText').css('color','#d40f2a');

//Dès qu'on passe sur #secondTextBlue, on applique la couleur au secondText
    $('#secondTextBlue').hover(function(){
    $('#secondText').css('color','#1177d1');

    });
});
});
