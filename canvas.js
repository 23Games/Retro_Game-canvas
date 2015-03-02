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

function ground(){
  for(var i=0;i<=)
  rec
}

var frame=0;
;(function () {
  function main() {
    window.requestAnimationFrame( main );

    //window.cancelAnimationFrame( MyGame.stopMain );
    //MyGame.stopMain = window.requestAnimationFrame( main );
    //var tNow = window.performance.now();
    // Your main loop contents.
    ctx.fillStyle = "#232323";
    ctx.fillRect(0, 0, width, height);
    rec(2*frame,height/2,10,2);
    frame++;
    if(frame*2>width){
      frame=0;
    }

  }

  main(); // Start the cycle
})();
