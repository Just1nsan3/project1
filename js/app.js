console.log("Last Odyssey")

class Player {
	constructor(name, hitpoints) {
		this.name = name;
		this.hitpoints = 3;
	}
}

const hero = new Player()


// creating a name for your hero
$('.name').on('click', () => {
	const $inputVal = $('input').val();
	// not sure what to do here
	$('').text($inputVal)
	timer();
});



