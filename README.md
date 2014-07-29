#Rock paper Scissors lizard spock
live example http://jsfiddle.net/kristianhamilton/KLLQD/embedded/result/

##Whats going on
-	The function compareChoices() compares avaialble choices within an array, theses options are in a specific order. The choices given are then compared based on their position in this order and these numbers are taken away from each other. This differance is then used to work out the game result.
-	As all the action happens on one page I have used buttons rather than a tags.
-	I have created a series of function that can be reused in various locations.
-	High level accesibiltiy compliance is something I am keen to further explore, you will notice a few aria roles.
-	I have used jQuery, I will often throw in a splash of vanillia javascript for efficiency, I have used Jquery framework for browser support, http://youmightnotneedjquery.com/ is a cool resorce to show how to do certain tasks without using jQuery and http://www.quirksmode.org/dom/events/index.html to check wider support
-	I have used a custom build of jQuery so I have just what I want to reduce weight.
-	Hand images taken from //http://www.playrps.com/ to save time.

##Further development
-	Stagger automated computer vs computer game play, to watch it happen rather than all at once.
-	Use module pattern... but is already wrapped in a function to prevent poluting the global namespace.
-	Allow user to swap between rock paper scissors mode and rock paper Scissors lizard spock.
