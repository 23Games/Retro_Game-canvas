//canvas stuf
  var canvas = document.getElementById('game');
  var ctx = canvas.getContext('2d');

//width & height
  var width = window.innerWidth;
  var height =Math.floor(window.innerHeight/1.7) //Math.floor(window.innerHeight/1.7);//1.7 ratio aspect
  canvas.width = width;                           //set canvas width
  canvas.height = height;                         //set canvas height

//debug
  //console.log(width);
  //console.log(height);

//game wariable
  var d_time=0; //delta time

//Sprite class prototype and functions
  var Sprite = function () {//class for Sprite
        this.S_x =0;
        this.S_y =0;
        this.S_width=0;
        this.S_height=0;
    }
  Sprite.prototype = {
    addVertex: function(v){
    this.vertices.push(v);
  }
};


//player class prototype and functions
var Player = function (w,h) {//class for player
      this.P_x =200;
      this.P_y =Math.round(height/2-h-2);
      this.P_width=w;
      this.P_height=h;
      this.P_score=0;
      this.in_air_BOOL=false;
      this.vector_y=0;
      this.vector_y_max = 0;
  }
  Player.prototype.jump = function() {
    console.log("jump");//debug
    if(!this.in_air_BOOL){
      this.in_air_BOOL=true;
      this.vector_y_max+=15;
    }

  };
  Player.prototype.update = function() {
    if(this.in_air_BOOL){
      if(this.vector_y_max>0){
        this.vector_y+=2;
        this.vector_y_max--;
      }

      /*console.log("P_y: "+this.P_y);//debug
      console.log("vector_y_max: "+this.vector_y_max);//debug
      console.log("vector_y: "+this.vector_y);//debug*/

      if((this.P_y-this.vector_y+grav)<height/2-this.P_height-2){
        this.P_y+=-this.vector_y+grav;
        this.vector_y+=-grav;
      }
      else{
        this.in_air_BOOL=false;
        this.P_y=height/2-this.P_height-2;
        this.vector_y=0;
        this.vector_y_max=0;
      }
    }

  };
  Player.prototype.render = function() {
    ctx.fillStyle = "white";      //color
    ctx.fillRect(this.P_x, this.P_y, this.P_width, this.P_height);
  };

//obstyle class prototype and functions
    function O_obstycle (w,h) {//class for obstycle
        this.O_x =200;
        this.O_y =height/2-h;
        this.O_width=w;
        this.O_height=h;
        this.life_time=10;//life of obstycle
    };
    var obstycle_array = []; //obstycle object array
    //O_.prototype.obstycle_creator = function() {
    function obstycle_creator(){
      obstycle_array.push(new O_obstycle(20,20));
      console.log("new obstycle");
    };

    O_obstycle.prototype.obstycle_r = function(){
      //console.log("render");
      ctx.fillStyle = "white";      //color
      ctx.fillRect(this.O_x, this.O_y, this.O_width, this.O_height);
      ctx.fillRect(20, 20, 20, 20);

    };
    O_obstycle.prototype.obstycle_u = function(){
      //console.log(this.O_x);
      this.O_x+=-1;
    };
    function obstycle_u(){
      for(var i=0;i<obstycle_array.length;i++){
        obstycle_array[i].obstycle_u();
        obstycle_array[i].obstycle_r();
      }
    };

//key events handler
  function checkKey(e) {
      e = e || window.event;
      if ((e.keyCode == '38'/* up arrow*/) ||(e.keyCode == '32'/*spacebar*/)) {
          player_1.jump();
        }
      if ((e.keyCode == '79'/* up arrow*/)) {
          obstycle_creator();
        }
      }

//update function
  function update(){
    ground_u();
    obstycle_u();
    player_1.update();

    render();
  }

//render function
  function render(){
    ctx.clearRect(0, 0, width, height)//canvas clear
    ground(ground_x,height/2);
    player_1.render();
  }
//objects
var player_1=new Player(40,80);


//main loop
  ;(function () {
    function main() {
      window.requestAnimationFrame( main );
      document.onkeydown = checkKey;
      update();
      d_time++
    }
    main(); // Start the cycle
  })();