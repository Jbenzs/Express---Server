var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Request-With", "Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var tutorials = [
    {
        id: 1,
        title: "Heart of Courage - Two Steps From Hell",
        description: "Learn to Play Heart of Courage by Two Steps From Hell by the Youtuber: Marioverehrer",
        iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/A00XMDZntnY" frameborder="0" allowfullscreen></iframe>',
        thumbnail: "https://upload.wikimedia.org/wikipedia/en/9/93/TSFH-Invincible-Steven-R-Gilmore.jpg"
    }
];


app.get('/tutorials', function (req, res) {
    console.log("GET from server");
    res.send(tutorials);
});

app.listen(6069);
