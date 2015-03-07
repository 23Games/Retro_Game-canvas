//canvas stuf
  var canvas = document.getElementById('game');
  var ctx = canvas.getContext('2d');

//width & height
  var width = window.innerWidth;
  var height =Math.floor(window.innerHeight/2) //Math.floor(window.innerHeight/1.7);//1.7 ratio aspect
  canvas.width = width;                           //set canvas width
  canvas.height = height;                         //set canvas height

//debug
  //console.log(width);
  //console.log(height);

//game wariable
  var d_time=0; //delta time
  var g=1;//-in pixsels per frame          //Gravity also called gravitation force
  var ground_x=0;
//obstyle class prototype and functions
  function O_obstycle (w,h) {//class for obstycle
      this.O_x =width;
      this.O_y =height/2;
      this.O_width=w;
      this.O_height=h;
  }

  function obstycle_creator(){
    obstycle_array.push(new O_obstycle(20,20));
  }

  function obstycle_u(){

  }

//ground functions
  /*function rec(x,y,w,h,color){   //draw rectangle; x-position on x axis; y-position on y axis; h-height of bar;  w-width of bar color-string for color hexdec(like #232323)
    ctx.fillStyle = color;       //bar color
    ctx.fillRect(x, y, w, h,"#ffffff");
  }*/

  function ground(x,y){
    var l=width/12;
    ctx.beginPath();
    ctx.strokeStyle="white"
    for (var i=0; i<l+1; i++) {
      ctx.moveTo(x+(12*i), y);
      ctx.lineTo(x+(10*(i+1)+2*i), y);
    }
    ctx.stroke();
    /*for(var i=0;i<=width/12+12;i++){
      rec(x+12*i,y,10,1);
    }*/
  }
  function ground_u(){
    if(d_time%1==0){
      ground_x--;
      //debug
      //console.log(ground_x);
    }
    if(ground_x<-12){
      ground_x=0;
    }
  }

//player class prototype and functions
  function Player (w,h) {//class for obstycle
      this.P_x =width;
      this.P_y =height/2;
      this.P_width=80;
      this.P_height=40;
      this.P_score=0;
  }
  function Player_u(){

  }

//update function
  function update(){
    ground_u();


    render()
  }

//render function
  function render(){
    ctx.clearRect(0, 0, width, height)//canvas clear
    ground(ground_x,height/2)
  }

//main loop
  ;(function () {
    function main() {
      window.requestAnimationFrame( main );
      update();
      d_time++
      //version pre-alpha stuff
      //window.cancelAnimationFrame( MyGame.stopMain );
      //MyGame.stopMain = window.requestAnimationFrame( main );
      //var tNow = window.performance.now();
      /*ctx.fillStyle = "#232323";
      ctx.fillRect(0, 0, width, height);
      ground(frame*2,height/2);
      player(150,height/2-2);
      document.onkeydown = checkKey;
      //rec(2*frame,height/2,10,2);
      points_counter();
      frame++;
      if(frame>0){
        frame=-12;
      }*/
    }
    main(); // Start the cycle
  })();
