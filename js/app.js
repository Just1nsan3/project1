console.log('Last Fantasy');


// player stats
// class Hero {
// 	constructor(name, hitpoints) {
// 		this.name = name;
// 		this.hitpoints = 3;
// 	}
// }




// $('.enemy').hide()
// starting game
const game = {
	start() {
		// creating name for Player
		$('.name').on('click', (e) => {
			event.preventDefault();
			const heroName = $('#hero-name-input').val();
			
		$('#start-screen').hide('slow', function(){
            alert("Get ready to type!")
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
		})

	},
	// pull random quote for Player to type
	randomQuote() {
			let random = Math.floor(Math.random() * 3);
			let wordArray = list[random].split("");
			for (let i = 0; i < wordArray.length; i++) {
				const $span = $('<span></span>');
				$('.display').append($span);
				$span.text(wordArray[i]);
				$span.css('font-family', 'Verdana', 'sans-serif');
			    $span.css('text-shadow', '2px 2px #212421', '1px 1px #212021');
				$span.css('font-weight', 'normal');
				$span.css('color', 'white');
				$span.css('font-size', '30px');
			
			}
		}
	// typing the quote 	
// 	typing(e) {
// 		typed = String.fromCharCode(e.which);
// 		for (let i = 0; i < $span.length; i++) {
// 			if ($span[i].wordArray === typed) {
// 				if ($span[i].addClass('background')) {
// 					continue;
//             } else if ($span[i].addClass('background') === false && $span[i-1] === undefined || $span[i-1].addClass('background') !== false ) {
// 				}
// 			}
// 		}
// 	const checker = 0;
// 	for (let j = 0; j < $span.length; j++) {
// 		if ($span[j].className === 'span background') {
// 			checker++;
// 		}
// 		if (checker === spans.length) {
			
// 		}
// 	}
// }
		// nextEnemy() {
		// 	let nextEnemy = 
		// }

};


const list =
	["Too much hope is the opposite of despair... an overpowering love may consume you in the end.", "You look like a bear wearing a marshmallow.", "Sephiroth's strength is unreal. He is far stronger in reality than any story you might have heard about him."]

// hidden from the start menu

$('.enemy').hide()
$('.display').hide()


game.start()

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
console.log(bomb);



// Time limit for fights
let counter = 0;

const timer = () => {
  const newCount = setInterval(function(){
    counter++;
    console.log(counter);
    
    
  }, 1000)
};

// document.addEventListener('keydown', typing, false);

// ask about 
