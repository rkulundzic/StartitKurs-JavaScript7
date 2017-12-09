/*
7.1. Dobili smo podatke i zaduzenje da izvucemo statistiku.
Napraviti bjekat koji ce da sadrzi broj zaposlenih u svakom departmentu.
{
	Engineering: 2,
	IT: 2,
	Management: 1
}
*/

var people = [
  {
    name: 'Joe Schmoe',
    yearsExperience: 1,
    department: 'IT'
  },
  {
    name: 'Sally Sallerson',
    yearsExperience: 15,
    department: 'Engineering'
  },
  {
    name: 'Bill Billson',
    yearsExperience: 5,
    department: 'Engineering'
  },
  {
    name: 'Jane Janet',
    yearsExperience: 11,
    department: 'Management'
  },
  {
    name: 'Bob Hope',
    yearsExperience: 9,
    department: 'IT'
  }
];

function struka(array) {
	var engineering = 0;
	var it = 0;
	var management = 0;
	var struka = {engineering, it, management};

	for (var i = 0; i < array.length; i++) {
		if (array[i].department == 'IT') {
			it ++;
		}
		else if (array[i].department == 'Engineering'){
			engineering ++;
		}
		else if (array[i].department == 'Management'){
			management ++;
		}
	}

	var struka = {Engineering: engineering, IT: it, Management: management};

	console.log(struka);
}

struka(people);