var Barrel=function(x,y,an,src){
    this.an=an//angle of rotation-- how much it has to rotatew
    this.x=x;
    this.y=y;
    this.src=src;
    this.elem=null;
    this. a=0;// to chech the present position of the barrel
}
Barrel.prototype.setup=function(){
    this.elem = $("<img src='"+this.src+"' class='barrel' id='barrel'>");//creating image
    this.elem.css({top:this.y+"px",left:this.x+"px"});// css properties
    $('body').append(this.elem);//appending
}
Barrel.prototype.rotleft=function(){ // function for the left rotation
  
    if(this.a>-90){  //as it must not rotATE IN 360 DEGREE
    this.a=this.a-this.an; // updating current angle value
    this.elem.css({"transform-origin":"50% 100%","transform":"rotate("+this.a+"deg)"});// rotation
}
}
Barrel.prototype.rotright=function(){
    
     if(this.a<90){
    this.a=this.a+this.an;
    this.elem.css({"transform-origin":"50% 100%","transform":"rotate("+this.a+"deg)"});
}
    
}
Barrel.prototype.shoot=function(){
    
    var bullet=new Bullet($(".canon").position().left+110,$(".canon").position().top+30,"images/bullet.svg");
    bullet.setup();
}