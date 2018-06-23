var Hithandler = function () {

}

Hithandler.prototype.checkHits = function () {
    var self = this;
   
    $('.bullet').each(function () { // checking if the helicopter is shot
        var bullet = $(this);
        $('.enemy').each(function () {
            var enemy = $(this);
            var bx = bullet.position().left;
            var by = bullet.position().top;
            var ex = enemy.position().left ;
            var ey = enemy.position().top  ;
            if (bx > ex && bx < ex + 150 && by < ey + 150 && by > ey) {
                score+=10;
                enemy.attr('src', 'images/blast.gif').on('load', function() {
                    enemy.stop(true).fadeOut(function() {enemy.remove();});//stops the animation and then fades it out
                });
                
                bullet.remove();
                return false;
            }
        })
    });

    $('.bullet').each(function () {     // checking if the troop is shot
        var bullet = $(this);
        $('.troop').each(function () {
            var enemy = $(this);
            var bx = bullet.position().left;
            var by = bullet.position().top;
            var ex = enemy.position().left ;
            var ey = enemy.position().top  ;
            if (bx > ex && bx < ex + 150&& by < ey + 100 && by > ey) {
                score+=5;
                enemy.attr('src', 'images/blast.gif').on('load', function() {
                    enemy.stop(true).fadeOut(function() {enemy.remove();});
                });
                
                
                bullet.remove();
                return false;
            }
        })
    }); 
    setTimeout(function () {
        self.checkHits();
        $('#score').text("SCORE : "+score);
        if(count>armysize &&$(".troop").length<4)
            $("#rstart").show();
        else if($('body').find('img[src$="/trooper.svg"]').length>=4)
            $("#lose").show();
           $("#trs").text("TROOP  COUNT -  "+count); 
    }, 100);
}