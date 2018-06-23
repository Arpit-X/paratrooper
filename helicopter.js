
var HC = function (x, y, src) {
    this.x = x;
    this.y = y;
    this.src = src;

}
HC.prototype.setup = function () {
    if (this.src === 'images/helicopter02.gif' || this.src === 'images/helicopter04.gif') {
            
        var b = $('<img src="' + this.src + '" class="enemy">')

            .css({
                'top': this.y+'px',
                'left': this.x + 'px'
            })
            .load(function () {
                var self=this;
                var tr=setInterval(function(){
                     //CHECKIF  self is in  the dom
                     if(document.body.contains(self) && count<=armysize){
                    var troop=new Troop($(self).position().left,$(self).position().top+10,"images/paratrooper.svg");
                    troop.setup();
                    count++;
                 }

                    
                },(Math.random()*6000)+1000);//sets the time troops fall from the helicopter at random times
                $(this).animate({
                    'left': '-10px',

                }, 5000, "linear", function () {
                    //console.log(tr);
                    clearInterval(tr);
                    $(this).remove();// removes both the helicopter image and the gif
                    tr=undefined;
                })
            });
    }
    if (this.src === 'images/helicopter01.gif' || this.src === 'images/helicopter03.gif') {
        var b = $('<img src="' + this.src + '" class="enemy">')
            .css({
                'top':  '10px',
                'left': 0 + 'px'
            })
            
            .load(function () {
                var self=this;
                var tr=setInterval(function(){
                     //CHECKIF  self is in  the dom
                     if(document.body.contains(self) && count<=armysize){
                    var troop=new Troop($(self).position().left,$(self).position().top+10,"images/paratrooper.svg");
                    troop.setup();
                    count++;
                 }
                },(Math.random()*6000)+1000);
                $(this).animate({

                    'left': ($(window).width()) + 'px',

                }, 5000, "linear", function () {

                    $(this).remove();
                })
            });
    }
    $('body').append(b);
}