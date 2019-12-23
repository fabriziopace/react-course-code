const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const projectsDirectoryPath = path.join(__dirname, '/projects/');

app.use(express.static(projectsDirectoryPath));

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});