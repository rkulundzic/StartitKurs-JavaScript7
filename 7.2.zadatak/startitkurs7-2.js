/*
7.2. Dobili smo podatke i zaduzenje da izvucemo statistiku.
Napraviti bjekat koji ce da sadrzi broj zaposlene razvrstane po iskustvu:
{
	AMATEUR:["Bill Billson"],
	EXPERT:["Sally Sallerson", "Jane Janet"],
	NEWBIE: ["Joe Schmoe"],
	PRO:["Bob Hope", "John Doe"]
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
  },
  {
    name: 'John Doe',
    yearsExperience: 7,
    department: 'Management'
  }
]

function godineIskustva(array) {
	var amater = [];
	var newbie = [];
	var expert = [];
	var pro = [];

	for (var i = 0; i < array.length; i++) {
		if (array[i].yearsExperience <= 2 ){
			newbie.push(array[i].name);
		}
		else if (array[i].yearsExperience > 2 && array[i].yearsExperience <= 5){
			amater.push(array[i].name);
		}
		else if (array[i].yearsExperience > 6 && array[i].yearsExperience <= 9){
			pro.push(array[i].name);
		}
		else if (array[i].yearsExperience > 10 && array[i].yearsExperience <= 15){
			expert.push(array[i].name);
		}
	}

	var iskustva = {AMATEUR: amater, NEWBIE: newbie, EXPERT: expert, PRO: pro}

	console.log(iskustva)
}

godineIskustva(people);