Why ts?
advantages of (optional) typechecking
compiler
atomatic unit tests: you get errors in the code editor as soon as you create them, not silently in the browser, or with a confusing stack trace
intelisence: as soon as you hit 'dot', you get a list of options (you don't have to memorize more libraries)
write state-of-the-art js, not state-of-the-web
It's not 

npm install -g typescript
touch file.ts
let person = 'nate';
function response (person: string){
	console.log(`hello ${person}`);
	}
	response(person);

tsc file.ts -> creates file.js
node file.js -> hello world

To make this a typescript project: create a `tsconfig.json`.

Target is the property that defines which javascript version your *.ts files will compile to.  *.ts lets you write in es6 and beyond, but the browser and node aren't there yet.


Create directories for src and dist.  
Src will contain all typescript files.   
Set 'outDir' to './dist' and 'rootDir' to './src' in 'tsconfig.json'.

This is optional, but it's pritty common to find this file structure in larger projects and with different languages, like php.
Src is the directory where you write all your code.  Dist is the file that goes into distribution.  It's the code that's being used in production. For our purposes, it keeps the ts files in the src directory, and the js files in the src directory.

Move into the src directory, and create a new  ts file.  (cd src, touch test.ts)
Write some javascript that is no different from what you might normally write in a js file, like var day = "Saturday";
Run 'tsc' in the terminal.  You should now see a test.js file in the dist directory, and the code should be the same.


add a framework
npm install tsd -g
install type definitions: tsd install express --save