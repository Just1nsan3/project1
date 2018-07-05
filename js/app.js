console.log('Last Fantasy');


// player stats
// class Hero {
// 	constructor(name, hitpoints) {
// 		this.name = name;
// 		this.hitpoints = 3;
// 	}
// }


// 1 initial data structures for arrays -- basically done

// 2 make game.start() call get randomQuote() -- this should make sentence appear

// 3 make randomQuote create arrays (char arr, and arr of falses), update those properties in game obj -- test each, and test everything as you go by conosle logging

// 4 create printSentence() method that prints sentence (this will ultimately include user progress but maybe not at this step) -- use logic that was (currently is) in randomQuote. see pseudocode.  green bkgd COULD wait until after step 7, since there won't be a way yet to test input
// while writing printSentence, remember: the only source of truth is properties in game object

// 5 make randomQuote() call printSentence()

// 6 add listeners start with keydown simply working at all

// 7 write checkUserInput method and make keydown listener call it
// remember: checkUserInput method will use and update properties
// remember: checkUserInput method will call printSentence() to reflect those updates

// 8.  add green background if you didn't in step 4


// --- MVP






// starting game
const game = {
	realQuoteArray: [], // initial value -- later this will be changed
	inputQuoteArray: [], // starts out all F, as user types correct letters it is changed to true
	start() {
		// creating name for Player
		$('.name').on('click', (e) => {
			event.preventDefault();
			const heroName = $('#hero-name-input').val();
			
			$('#start-screen').hide('slow', function(){
            // alert("Get ready to type!")
        });

		// showing enemy
		$('.enemy').show();
		
		// changed bakground with .css
		$('html').css('background-image', 'url(http://pixelsmashers.com/wordpress/wp-content/uploads/2011/05/Final_Fantasy_XIV.jpg');
		$('html').css('background-repeat', 'no-repeat');
		$('html').css('background-size', 'cover');
		
		// display name for hero
		const $displayHeroName = $('<h2></h2>');
		$('#player').append($displayHeroName);
		$displayHeroName.text(heroName);
		$displayHeroName.css('position', 'relative');
		$displayHeroName.css('right', '160px');
		$displayHeroName.css('top', '200px');
		$displayHeroName.css('font-family', 'Verdana', 'sans-serif');
		$displayHeroName.css('text-shadow', '2px 2px #212421', '1px 1px #212021');
		$displayHeroName.css('font-weight', 'normal');
		$displayHeroName.css('color', 'white');
		$('#player').css('position', 'relative');
		$('#player').css('left', '400px');
		$('#player').css('top', '200px');

		// display name for enemy
		const $displayEnemyName = $('<h2></h2>');
	    $('.enemy').append($displayEnemyName);
		$displayEnemyName.append(boss.name);
		$displayEnemyName.text(boss.name);
		$displayEnemyName.css('position', 'relative');
		$displayEnemyName.css('font-family', 'Verdana', 'sans-serif');
		$displayEnemyName.css('text-shadow', '2px 2px #212421', '1px 1px #212021');
		$displayEnemyName.css('font-weight', 'normal');
		$displayEnemyName.css('left', '130px');
		$displayEnemyName.css('top', '10px');
		$displayEnemyName.css('color', 'white');
		$('.enemy').css('position', 'relative');
		$('.enemy').css('top', '30px');

	    // keyboard display
	    $('.display').show()

        
			timer();
			this.randomQuote()

		})

	},
	// pull random quote for Player to type
	randomQuote() {
		const random = Math.floor(Math.random() * list.length);
		// get array of characters for a string

		const sentence = list[random];
		console.log(sentence)
		// TODO item 1: add quote array to properties in game object above


		this.realQuoteArray = sentence.split("")
		// array of booleans

		// for (let i = 0; i < printArray.length; i++)
		// 	if (this.realQuoteArray === true) {
		// 	} if (this.inputQuoteArray === false) {

		// 	}

		this.printSentence()

	},

    printSentence() {
		// add spans to screen - 1 per letter

		for (let i = 0; i < this.realQuoteArray.length; i++) {
			const $span = $('<span></span>');
			$('.display').append($span);
			$span.text(this.realQuoteArray[i]);
			$span.css('font-family', 'Verdana', 'sans-serif');
		    $span.css('text-shadow', '2px 2px #212421', '1px 1px #212021');
			$span.css('font-weight', 'normal');
			$span.css('color', 'white');
			$span.css('font-size', '30px');
			// if correct --> green bkgd
		}
    },
    
    
     
      	// for (let i = 0; i < this.printSentence.length; i++) {
      	// 	if (this.printSentence === typ)
      	
	// get the key pressed from e
	// pass that (1 character long string) to your check function

}

    $('document').on('keydown', (e) => {
      	console.log('typing')
    })

const list =
	["Too much hope is the opposite of despair... an overpowering love may consume you in the end.", "You look like a bear wearing a marshmallow.", "Sephiroth's strength is unreal. He is far stronger in reality than any story you might have heard about him."]

// hidden from the start menu

$('.enemy').hide()
$('.display').hide()



// add listeners here -- 7-5-2018 1230mp



// functions
game.start()
// game.printSentence();

// $('.display').text(list[random])




	
// Player stats
const hero = {
	name: "",
	hitpoints: 3,
	
};





// enemy stats
class Enemy {
	constructor(name, hitpoints) {
		this.name = name;
		this.hitpoints = hitpoints;
	}
};

// 1-3 enemies player will be facing
const bomb = new Enemy('Bomb', 3);
const cactuar = new Enemy('Cactuar', 5);
const boss = new Enemy('Sephiroth', 10);



// Time limit for fights
let counter = 0;

const timer = () => {
  const newCount = setInterval(function(){
    counter++;
    // console.log(counter);
    
    
  }, 1000)
};

// document.addEventListener('keydown', typing, false);

// ask about 
