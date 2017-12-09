/*
Dobili mso sirove zadatke i zaduzenje da izvucemo odredjenu statistiku.
Nas zadatak: Napraviti novi niz koji ce sadrzati imena zaposlenih.
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
  },
  {
    name: 'John Doe',
    yearsExperience: 7,
    department: 'Management'
  }
]

function imena(array) {
	var imenaZaposlenih = [];

	for (var i = 0; i < array.length; i++) {
		imenaZaposlenih.push(array[i].name);
	}

	console.log(imenaZaposlenih);
}

imena(people);