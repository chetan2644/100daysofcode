console.log('Hello world');
console.log({
    name: 'Shahrukh Khan',
    age: 54,
    occupation: 'actor'
});
window.alert('This is the first program');
window.prompt('Enter value');
window.confirm('Are you sure you want to do 100days of Coding Challenge');

// create a canvas:

var canvas = document.createElement('canvas');
canvas.width  = 200;
canvas.height = 100;
//this will be a 2d canvas.
var ctx = canvas.getContext('2d');
ctx.font = '30px cursive';
ctx.fillText("Hello Text!", 50,50);
document.body.appendChild(canvas);

// create a svg.
var svg = document.createElementNS('https://www.w3.org/2000/svg', 'svg');
svg.width = 500;
svg.height = 50;

var text = document.createElementNS('https://www.w3.org/2000/svg', 'text');
text.setAttribute('x', '0');
text.setAttribute('y', '50');
text.style.fontFamily = 'Times New Roman';
text.style.fontSize = '50';
text.content = 'Hello 1 Day of Coding';
svg.appendChild(text);
document.body.appendChild(svg);
// end of the day 14 April.