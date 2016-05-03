already done:
installed node/npm
npm install -g typescript
npm install -g tsd

1. mkdir dist
2. npm init
3. in package.json, add in scripts:     
	"tsc": "tsc",
    "tsc:w": "tsc -w --outDir dist",
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npm run tsc:w"
4. touch tsconfig.json
3. nsd install express -S
4. npm install express -S
5. npm install -g expressworks
6. tsd rebundle
7. touch 1-hello-world.ts
8. First line 1-hello-world.ts: /// <reference path="typings/tsd.d.ts" />
9. write the solution
10. npm start
11. create another tab, cd into dist
11. expressworks 1-hello-world.js