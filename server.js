const express = require('express');

const app = express();

app.get('/api/apartments', (req, res) => {
    const apartments = [
        {
            "id": "generate with date",
            "location": "artillerigatan 63 Stockholm",
            "price": "10000 sek",
            "avialable": true,
            "entryDate": 20190920,
            "url": "https://q-cf.bstatic.com/images/hotel/max1024x768/103/103540397.jpg"
        },
        {
            "id": "generate with date",
            "location": "artillerigatan 63 Stockholm",
            "price": "10000 sek",
            "avialable": true,
            "entryDate": 20190920,
            "url": "https://q-cf.bstatic.com/images/hotel/max1024x768/103/103540397.jpg"
        }
    ];
    res.json(apartments);
});

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

