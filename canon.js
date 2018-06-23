var Canon=function(x,y,src){
    this.x=x;
    this.y=y;
    this.src=src;
    this.elem=null;
}
Canon.prototype.setup=function(){
    this.elem=$("<img src='"+this.src+"' class='canon'>");//creating the image elemnt for the cannon
    this.elem.css({top:this.y+"px",left:this.x+"px"});//setting its css properties
    $("body").append(this.elem); //appending it to the body
}