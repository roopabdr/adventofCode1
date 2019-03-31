const fs = require('fs');
const groundFloor = 0; //Floor 0 init
const currentFloor = 0; //init @ Floor groundFloor

console.time('santachallenge'); //start timer

//read file
const file = fs.readFileSync('./Santa.txt'); //synchronous

const upstairs = (stream, regex) => stream.match(regex).toString().replace(/,/g,'').length;;

const downstairs = (stream, regex) => stream.match(regex).toString().replace(/,/g,'').length;

//read characters from file
const readFile = (handle, up, down) => {
	let stream = handle.toString();
	let upRegex = new RegExp('\\'+up+'+', 'g');
	let downRegex = new RegExp('\\'+down+'+', 'g');

	let floor = upstairs(stream, upRegex) - downstairs(stream, downRegex);
	console.log('floor no.', floor);
}

readFile(file, '(', ')');

console.timeEnd('santachallenge'); //stop timer