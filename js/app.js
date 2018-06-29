console.log("Last Odyssey")

class Player {
	constructor(name, hitpoints) {
		this.name = name;
		this.hitpoints = 3;
	}
}

const hero = new Player()

$('.name').on('click', () => {
	const $inputVal = $('input').val();
	$('h1').text($inputVal)
	timer();
});