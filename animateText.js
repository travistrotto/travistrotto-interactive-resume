function myFunction(){

/*
$("#example").typer({
	strings: [
	"I'm a Model",
	"I'm a Designer",
	"I'm a Photographer"
	],
	typeSpeed: 200,
	backspaceSpeed: 20,
	backspaceDelay: 800,
	repeatDelay: 1000,
	repeat: true,
	autoStart: true,
	startDelay: 100,
	});
*/
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Hello World!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Strings can be removed')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('<strong>altered!</strong>')
    .pauseFor(2500)
    .start();
}
