 $(document).ready(function() {

 var burgerClick = 0;   
     
$("a").click(function () {
$(".topmenu").removeClass('mobile');
burgerClick = 0; 
var elementClick = $(this).attr("href")
var destination = $(elementClick).offset().top;
jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
return false;
});

     
$("#burger").click(function () {  
    
if (burgerClick == 0)  
    
{
$(".topmenu").addClass('mobile');
burgerClick = 1;
}
    
else 
{
    
$(".topmenu").removeClass('mobile');
burgerClick = 0;   
    
}
    
});
     
  
     
$(window).scroll(function() {
     
var scrollBottom =  $(document).height();
      
      
if (($(this).scrollTop() >= 700)) {
         
$('#top').fadeIn();


         
} else {
    
$('#top').fadeOut();
         
} 
  
  

});   

       

     
});
    