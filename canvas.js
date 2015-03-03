//canvas stuf
var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

//width & height
var width = window.innerWidth;
var height =Math.floor(window.innerHeight/2) //Math.floor(window.innerHeight/1.7);//1.7 ratio aspect
canvas.width = width;                           //set canvas width
canvas.height = height;                         //set canvas height

//debug
/*console.log(width);
console.log(height);*/
//game wariable


function rec(x,y,w,h){              //draw rectangle; x-position on x axis; y-position on y axis; h-height of bar;  w-width of bar
  ctx.fillStyle = "white";      //bar color
  ctx.fillRect(x, y, w, h);
}

function ground(x,y){

  for(var i=0;i<=width/12+12;i++){
    rec(x+12*i,y,10,1);
  }
}

var player_pos_x;
var player_pos_y;
var player_speed_y=0;
var player_speed_y_max;
var in_air=false;//boolean

function player(x,y){
  var p_height=80;
  var p_width=40;
  jump()
  rec(x,y-p_height-player_speed_y,p_width,p_height);
}



function checkKey(e) {
    e = e || window.event;
    if ((e.keyCode == '38'/* up arrow*/) ||(e.keyCode == '32'/*spacebar*/)) {
      if(!in_air){
        in_air=true;
        player_speed_y=100;
      }
    }
}

function player_control(x,y){

}

function jump(){//j_b-in_air boolean
  if (player_speed_y>0){
  //if (j_bool){
    player_speed_y-=2;
  }
  else{
    in_air=false;
  }
}

var frame=-12;
;(function () {
  function main() {
    window.requestAnimationFrame( main );

    //window.cancelAnimationFrame( MyGame.stopMain );
    //MyGame.stopMain = window.requestAnimationFrame( main );
    //var tNow = window.performance.now();
    // Your main loop contents.
    ctx.fillStyle = "#232323";
    ctx.fillRect(0, 0, width, height);
    ground(frame*2,height/2);
    player(150,height/2-2);
    document.onkeydown = checkKey;
    //rec(2*frame,height/2,10,2);
    frame++;
    if(frame>0){
      frame=-12;
    }

  }

  main(); // Start the cycle
})();
