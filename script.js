$("button").click(function(){
 let variable1 = $(".A").val();  
 let variable2= $(".B").val();
 let variable3 = $(".C").val();  
    
 let variable4= variable3 * 15695 ;
  $(".fortune-display").append(variable1+ " will play "+variable4+" soccer games by 2065.");
    
    console.log (variable1,variable2,variable3);
    
  $("fortune-display").text(variable1,variable2,variable3);
});