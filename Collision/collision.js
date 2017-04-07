'use strict'

function CircleCircle(){
  var dx = circle1.x - circle2.x;
  var dy = circle1.y - circle2.y;
  var d= Math.sqrt(dx * dx + dy * dy);
    if(d < circle.r + circle2.r2){
      throw "Overlapping circles";
    }
}
//
// function CirclePoint(){
//   if(d<r){
//
//   }
// }
//
// function SquareSquare(){
//   if(x2<x+w && y2<y+h){
//
//   }
// }
//
// function SquarePoint(){
//   if(){
//
//   }
// }
