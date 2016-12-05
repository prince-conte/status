 $(document).ready(function() {

 var burgerClick = 0;   
     
$("a").click(function () {
var elementClick = $(this).attr("href")
var destination = $(elementClick).offset().top;
jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
return false;
});

     
$("#burger").click(function () {  
    
if (burgerClick == 0)  
    
{
$(".navlink").css('display' , 'table');
burgerClick = 1;
}
    
else 
{
    
$(".navlink").css('display' , 'none');
burgerClick = 0;   
    
}
    
});
        
     
});
    