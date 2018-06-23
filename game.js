var barrel;
var canon;
var enemy;
var armysize = 30;
var count = 0;
var score=0;
$(document).ready(function () {
    canon = new Canon($(window).width() / 2 - 110, $(window).height() - 150, "images/canonbase.svg");
    canon.setup();
    barrel = new Barrel($(window).width() / 2 - 10, $(window).height() - 210, 5, "images/barrel.svg");
    barrel.setup();
    $("#start-btn").on('click', function () {
        $("#start-btn").hide();
        setInterval(function () {

            var i = Math.floor(Math.random() * 4) + 1;//generating a random number between 1-4
            //console.log("images/helicopter0"+i+".gif");
            enemy = new HC($(window).width() - 100, 100, "images/helicopter0" + i + ".gif")
            enemy.setup();
        }, 4000);
       
    });
    $("#rstart").on('click',function(){
        location.reload();
    });
    $("#lose").on('click',function(){
        location.reload();
    });
     $("#rstart").hide();
     $("#lose").hide();
    hithandler = new Hithandler();
    hithandler.checkHits();
})
    .keydown(function (k) {
        if (k.which == 37) {
            k.preventDefault();
            barrel.rotleft();
        } else if (k.which == 39) {
            k.preventDefault();
            barrel.rotright();
        } else if (k.which == 32) {
            k.preventDefault();
            barrel.shoot();
        }
    });