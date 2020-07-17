var a = 5;
var b = 7;
// console.log('before swap:a =', a, 'b=', b);
var temp = a;
a = b;
b =temp;
var temp = b;
// console.log('after swap:a =' ,a, 'b=',b);

var x = 5;
var y = 7;
x = x + y ;
y = x - y;
x = x - y;
// console.log('after swap:a=', a, 'b=' ,b);

var p = 5;
var q = 7;
[p,q] = [q,p];
// console.log( 'after swap: p=',p, 'q=',q);

var a=5;
var b=9;
var temp = a;
a  = b;
var temp =b;

// console.log('after swap:a=',a , 'b=', b);

var x =55;
var y = 77;
x = x + y ;
y = x -y ;
x = x - y ;
// console.log( 'after swap: x=',x , 'y=',y);

var p = 99;
var q = 77;
[p,q] = [q,p];
console.log('after swap:p=',p, 'q=',q);
