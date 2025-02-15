const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000

app.use(express.static('public'))
// Without middleware
app.get('/', function (req, res) {
    const options = {
        root: path.join(__dirname)
    };

    const fileName = 'index.html';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.error('Error sending file:', err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});

app.listen(PORT, function (err) {
    if (err) console.error(err);
    console.log("Server listening on PORT", PORT);
});

console.log("Server started on port 3000");
