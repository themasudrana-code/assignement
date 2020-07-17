// feetToMile function
function feetToMile(feet){
    var mile = feet * 0.000189393939;
    return mile;

}
var firstMile = feetToMile(1000);
console.log(firstMile);
var secondMile = feetToMile(5000);
console.log(secondMile);
var thirdMile = feetToMile(50000);
console.log(thirdMile);



// woodCalculator
function woodCalculator(chair, table, bed){
    var isChair= chair*1;
    var isTable= table*3;
    var isBed= Bed*5;
    var resulte= isChair+isTable+isBed;
    return resulte;
}
var result= woodCalculator(4, 7, 10);
console.log(result);


//brickCalculator
function brickCalculator(weather){
    if (weather > 0 && weather <= 10) {
       var tenth  = (weather*15*1000);
       return tenth;
   } else if (weather > 10 && weather <= 20) {
       var twenty  = (weather*12*1000+30000);
       return twenty;
   } else if (weather > 20 ) {
       var thirty  = (weather*10*1000+70000);
       return thirty;
   } else {
       var milestone  = ("i will build a building");
       return milestone;
       
   }
}
var result = brickCalculator(21);
console.log(result);



// tinyFriend
function tinyFriend(arry) {
	return arry.reduce(function(shakil, tamimIqbal) {
		if (tamimIqbal.length < shakil.length) {
			return tamimIqbal;
		}
		else 
			return shakil;
	})
}
