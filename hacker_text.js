var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Future Software Engineer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Computer Science Student')
    .pauseFor(2500)
    .deleteAll()
    //.typeString('<strong>Hello World!</strong>')
    .typeString('<strong>Hover over me!</strong>')
    .pauseFor(2500)
    //.deleteChars(7)
    .pauseFor(2500)
    .start();