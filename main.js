const express = require('express');
const { } = require('express-handlebars');

// Port to listen to
const PORT = parseInt(process.env.PORT) || 3000;

// Create an instance of express
const app = express();

//Serve files in the static directory
app.use(express.static(__dirname + '/static/'))

app.listen(PORT, () => {
    console.info(`Application started on port ${PORT} at ${new Date()}`);
})