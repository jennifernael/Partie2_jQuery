   //déclanchement fonction au chargement grâce au .ready qui indique qu'on est sur du jQuery
   // $ = document.getElementById
   $(function(){

//Dès qu'on clique sur #firstTextRed, on applique la couleur au firstText
    $('#firstTextRed').click(function(){
        //.css est une "méthode"
    $('#firstText').css('color','#d40f2a');

//Dès qu'on clique sur #secondTextBlue, on applique la couleur au secondText
    $('#secondTextBlue').click(function(){
    $('#secondText').css('color','#1177d1');

    });
});
});