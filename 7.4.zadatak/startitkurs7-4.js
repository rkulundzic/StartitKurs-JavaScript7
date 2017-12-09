/*
7.4. Napraviti novi niz koji se dobija mnozenjem parnih elemenata sa 3,
a neparnih sa 4.
function multiplayEvenAndOds(array){

}

*/

var test_niz1 = [1, 6, 2, 5, 7, 2, 8, 3];
var test_niz2 = [45, 62, 123, 63, 74, 85, 21, 77];
var test_niz3 = [-6, 23, 10, 0, -22, 52, 86, 2];

function niz(array) {
	var noviNiz=[];

	for (var i = 0; i < array.length; i++) {
		if (array[i]%2 == 0){
			noviNiz.push(array[i]*3);
		}
		else{
			noviNiz.push(array[i]*4);
		}
	}

	console.log(noviNiz);
}

niz(test_niz1);
niz(test_niz2);
niz(test_niz3);