module.exports = function (app) {

    // home page
    app.get('/', function (req, res) {
        res.render('index', { title: 'Home Page.  ' })
    });

    // chat area
    app.get('/chat', function (req, res) {
        res.render('chat', { title: 'Chat with Me!  ' })
    });

    // about page
    app.get('/about', function (req, res) {
        res.render('about', { title: 'About Me.  ' })
    });
            // about page
    app.get('/api', function (req, res) {
        res.json({ message: 'hooray! welcome to our api!' });
    });

    
    app.get('/api/hand', function (req, res) {
        var hand = ['king diamond', 'two heart'];
        res.send(hand);
    })
}
