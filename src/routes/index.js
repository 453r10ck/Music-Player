const libRouter = require('./library');

function route(app) {
    app.get('/', (req, res) => {
        res.render('home'); 
    })
    
    // app.get('/library', (req, res) => {})
    app.use('/library', libRouter);
}

module.exports = route;
