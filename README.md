# Simple Web Server

In this lab exercise we work together to build a simple web service.

## Getting started

To get started, clone the repository locally and checkout the `1-starter` branch.

Then create an `index.js` file and modify your npm scripts to start `node index.js`.

Add `console.log('Simple Web Server')` in `index.js` and run `npm start` to test that everything is working correctly.

## Hello, world

Express is a framework for building Node.js web applications. We are going to use Express.

First, install Express with `npm install --save express`

Follow the instructions from the [Hello world example](https://expressjs.com/en/starter/hello-world.html) in the Express documentation to create your server.

Run, `npm start` and check `localhost:3000` on your web browser.

## Hello, JumpStarters

Let's make a change to our service and return the message, "Hello, JumpStarters!" and observe the changes on the browser.

Our changes are not reflected on the browser, because we have to restart the server again in order to apply those changes.

As you can imagine, this becomes rather tedious to have to this over and over again. We can instead use `nodemon` to watch for any changes and restart `node` automatically for us.

Install, `npm install --save-dev nodemon`.

Then add `start:dev` to your npm scripts, to run this command `nodemon index.js`.

Try running `npm run start:dev`, make more changes to your app and see if you can view those changes immediately.

We now have two ways to start our web application:

- `npm start` which we can use during production
- `npm run start:dev` which we can use during development
