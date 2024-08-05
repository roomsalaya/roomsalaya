const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/api/notify', async (req, res) => {
    try {
        const { message, imageUrl } = req.body;
        const response = await axios.post('https://notify-api.line.me/api/notify',
            new URLSearchParams({
                message,
                imageThumbnail: imageUrl,
                imageFullsize: imageUrl,
            }), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer 2aDKUQzI2hPap5H5gzTmjaz65EJA233P1vFq88B8XdQ`
            }
        });
        res.status(response.status).send(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).send(error.message);
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
