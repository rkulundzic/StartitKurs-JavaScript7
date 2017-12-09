/*
7.5. Koliko elemenata ulaznog niza je veće od zadatog broja?
Funkcija vraća broj.
function getNumberOfElementsGreaterThan(array, limit) {
  
}

*/

var test_niz1 = [1, 6, 2, 5, 7, 2, 8, 3];
var test_niz2 = [45, 62, 123, 63, 74, 85, 21, 77];
var test_niz3 = [-6, 23, 10, 0, -22, 52, 86, 2];

function limit(array, a){
	var brojac = 0;

	for (var i = 0; i < array.length; i++) {
		if (array[i] > a){
			brojac ++;
		}
	}

	console.log(brojac);
}

limit(test_niz1, 5);
limit(test_niz2, 47);
limit(test_niz3, 3);