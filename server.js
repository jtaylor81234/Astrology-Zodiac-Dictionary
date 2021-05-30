const express = require('express');

const app = express();


app.use(express.static(__dirname + '/client (front-end)')); 
// dirname refers to the directory name (the current project)
// App is a reference to the express module

//Setup Environment variables for external application use
const port = process.env.PORT || 7799; 
// application will use 3000 port on local machine, will use this environment port when we deploy our application to make it live on the internet


app.listen(port, () => {
	console.log('The server is running on nodemon port ' + port);
}); // When application listens to the port, if successful, the console will report on the status


