
$(".pc-img").mousemove(function(event){

    var mousex = event.pageX - $(this).offset().left;
    var mousey = event.pageY - $(this).offset().top;

    var imgx = (mousex - 300) / 40;
    var imgy = (mousey - 200) / 40;

    $(this).css("transform", "translate(" + imgx + "px," + imgy + "px)");
});
  
$(".pc-img").mouseout(function(){$(this).css("transform", "translate(0px,0px)");});