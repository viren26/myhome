  $(document).ready(function(){
  
  $("#flam").mouseover(function(){ 
      
    context.clearRect(0, 0, canvas.width, canvas.height);
 var  myall = '480,162,655,151,646,246,481,247'.split(',');

           var a = myall.length; 
        context.strokeStyle = "red";
        context.lineWidth = 4;
        context.fillStyle = "red";
 
       
      $('context').fadeTo(100,0.5);
        context.beginPath();
  
    context.moveTo(myall[0],myall[1]);
    
    for (var i = 2; i < a; i = i +2) {
      context.lineTo(myall[i],myall[i+1]);
}
  
     context.closePath();
     context.stroke();
     context.fill();
  
    });
   });