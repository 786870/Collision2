'use strict'
window.addEventListener('load', setup, false);
var game;
var circle;
var square;
var circle2;
var square2;

function setup(){
  game = new Game();
  circle = new Circle(100,75,50);
  circle2 = new Circle(50,75,50);
  square = new Square(200, 200, 100, 100);
  square2 = new Square(200, 250, 100, 100);
}

function draw(){
  game.run();
}

function Game(){
    this.canvas = document.getElementById('canvas');
      if (!this.canvas || !this.canvas.getContext)
      throw "No valid canvas found!";
      this.context = this.canvas.getContext("2d");
      if(!this.context)
      throw "No valid context found!";
}

function Circle(x, y, r){
  console.log('hello');
  var x = x;
  var y = y;
  var r = r;
  game.context.beginPath();
  game.context.arc(x,y,r,0,2*Math.PI);
  game.context.fillStyle = "blue";
  game.context.fill();
  game.context.stroke();

  run(){

  }
}

function Square(x, y, w, h){
  var x = x;
  var y = y;
  var w = w;
  var h = h;
  game.context.beginPath();
  game.context.rect(x, y, w, h);
  game.context.fillStyle = "red";
  game.context.fill();
  game.context.stroke();
}
