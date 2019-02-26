# Simple Web Server

In this lab exercise we work together to build a simple web service.

## Structure your routes

Create a `routes` folder and in it create an `index.js` file.

Move your `app.get()` into `routes/index.js` and replace the `app` to `router`.

Then, import your index routes into `app.js` like so,

```
const index = require("./routes/index");
app.use("/", index);
```
