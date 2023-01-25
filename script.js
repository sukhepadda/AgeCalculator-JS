let formElement = document.getElementById('formElement');
let bd = document.getElementById('bd');
let bm = document.getElementById('bm');
let by = document.getElementById('by');
let td = document.getElementById('td');
let tm = document.getElementById('tm');
let ty = document.getElementById('ty');

let date = new Date();
// console.log(date);

td.value = date.getDate();
tm.value = date.getMonth()+1;
ty.value = date.getFullYear();

formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    document.getElementById('age').innerHTML = `age: ${ty.value-by.value}`;
 
    if (tm.value < bm.value) {
		document.getElementById('months').innerHTML = `months: ${tm.value - bm.value + 12}`;
		by.value = by.value - 1;
	} else {
		document.getElementById('months').innerHTML = `months: ${tm.value - bm.value}`;
	}

    if (td.value < bd.value) {
		document.getElementById('days').innerHTML = `${td.value - bd.value + 30}`;
		tm.value = tm.value - 1;
	} else {
		document.getElementById('days').innerHTML = `${td.value - bd.value}`;
	}
})

