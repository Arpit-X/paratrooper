var Bullet=function(x,y,src){
    this.x=x;
    this.y=y;
    this.src=src;
    
    
}
Bullet.prototype.setup=function(){
    var b=$("<img src='"+this.src+"' class='bullet' >");//creating instance for bullets
    b.css({top:this.y+"px",left:this.x+"px"})
    .load(function(){//when image loads
        
        $(this).animate({
            "top": (Math.abs(barrel.a-20)-50)+"%", // to make bullet go in required directions top and left of images are taken as per the screen percentage
            "left":((barrel.a)+51)+"%"
        },1000,"linear",function(){
            $(this).remove();// after the animation ends bullets must be removed
        })
    });
    $("body").append(b);
}