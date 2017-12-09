/*
7.6. Ako je treći argument true treba napraviti novi niz
od elemenata ulaznog koji su VEĆI ili JEDNAKI od
zadatog broja. Ako je treći argument false treba 
napraviti novi niz od elemenata ulaznog koji su
MANJI od zadatog broja. Funkcija vraća niz

function filterOutElements(array, limit, direction) {
  
}

*/

var test_niz1 = [1, 6, 2, 5, 7, 2, 8, 3];
var test_niz2 = [45, 62, 123, 63, 74, 85, 21, 77];
var test_niz3 = [-6, 23, 10, 0, -22, 52, 86, 2];

function filter(array, limit, direction) {
	var noviNiz = [];

	if (direction) {
		for (var i = 0; i < array.length; i++) {
			if (array[i] >= limit){
				noviNiz.push(array[i]);
			}
		}
	}

	else {
		for (var i = 0; i < array.length; i++) {
			if (array[i] < limit) {
				noviNiz.push(array[i]);
			}
		}
	}
	console.log(noviNiz);
}

filter(test_niz1, 5, true);
filter(test_niz1, 7, false);
filter(test_niz2, 47, true);
filter(test_niz2, 47, false);
filter(test_niz3, 1, true);
filter(test_niz3, 5, false);