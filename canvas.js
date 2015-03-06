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




var player_pos_x;
var player_pos_y;
var player_speed_y=0;
var player_speed_y_max;
var in_air=false;//boolean
var points=0;
var d_time=0;
var obstycle_array;
var speed

function O_obstycle (w,h) {//class for obstycle
    this.O_x =width;
    this.O_y =height/2;
    this.O_width=w;
    this.O_height=h;
}

function obstycle_creator(){
  obstycle_array.push(new O_obstycle(20,20));
}

function O_move(){

}

function rec(x,y,w,h){              //draw rectangle; x-position on x axis; y-position on y axis; h-height of bar;  w-width of bar
  ctx.fillStyle = "white";      //bar color
  ctx.fillRect(x, y, w, h);
}

function ground(x,y){

  for(var i=0;i<=width/12+12;i++){
    rec(x+12*i,y,10,1);
  }
}

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

function obstycle(){

}

function points_counter(){
  if(d_time==60){
    points++;
    d_time=0
  }
  else{
    d_time++;
  }
  ctx.font = "48px serif";
  ctx.color = "#ffffff";
  ctx.fillText(points, 200, 200);
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
    points_counter();
    frame++;
    if(frame>0){
      frame=-12;
    }

  }

  main(); // Start the cycle
})();
