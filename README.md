# Frontend tooling with NPM
Experimental build script with NPM tasks and node scripts only. No taskrunner like Grunt or Gulp is used.

## Installation
````bash
npm install
````
## Usage
````bash
npm run start
````
This will create the dist/ folder structure containing js/ folder and main.js, /css folder and base.css, index.html.
It ends by firing up an Express server on port 1984.

You can access the app/website by typing http://localhost:1984/ in your browser.
### Watch
Run the following command to compile your CSS file, Javascript bundle and HTML file on the fly.
````bash
npm run watch
````
