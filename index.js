import express from 'express'

const app = express();
app.use(express.json())

app.use(express.static('public'));

const greetings = {
    'english' : 'hello',
    'xhosa' : 'Molo',
    'zulu' : 'Sawubona',
}
app.get('/api/greet', function(req, res) {
    const username = req.query.username;
    const language = req.query.language;

    if(!greetings[language]) {
        return res.json({
            error : 'invalid language supplied'
        })
    }

    const greeting = greetings[language];
    res.json({
        message : `${greeting}, ${username}`
    })
});

app.post('/api/greet', function(req, res) {
    const language = req.body.language;
    greetings(language) = req.body.greeting
    res.json({
        status : 'success',
        message: `added a greeting for ${language}` 
    });

});

app.get('/api/greet/:username', function(req, res){
    console.log(req.params);
    const username = req.params.username;
    res.json({
        message : `Hello, ${username}!`
    })
});

const PORT = 4009;

app.listen(PORT, function() {
    console.log(`app started on port ${PORT}`);
});