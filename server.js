const express = require('express');
const request = require('request');
const app = express();
const PORT = 4000;

app.use(express.json());

app.post('/api/notify', (req, res) => {
    const options = {
        url: 'https://notify-api.line.me/api/notify',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer 2aDKUQzI2hPap5H5gzTmjaz65EJA233P1vFq88B8XdQ`
        },
        form: {
            message: req.body.message,
            imageThumbnail: req.body.imageThumbnail,
            imageFullsize: req.body.imageFullsize
        }
    };

    request(options, (error, response, body) => {
        if (error) {
            return res.status(500).send('Error');
        }
        res.status(response.statusCode).send(body);
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
