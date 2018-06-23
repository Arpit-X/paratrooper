 var Troop=function(x,y,src){
        this.x=x;
        this.y=y;
        this.src=src;
 }
 Troop.prototype.setup=function(){
    var tr=$("<img src='"+this.src+"'class='troop'>")
  
    tr.css({top:this.y+2,left:this.x+3})
    .load(function(){
        
        $(this).animate({
            "top": ($(window).height()-60)+"px" //troops falling down
        },5000,"linear",function(){
           
            $(this).attr("src","images/trooper.svg")//
        });
    });
    $("body").append(tr);
 }
