var express = require("express"),
app = express(),


    //hostname = process.env.HOSTNAME || 'localhost',
    hostname = 'localhost',
    port = parseInt(process.env.PORT, 10) || 8090;


    app.use(express.static(__dirname + '/web-app'));



    app.get("/", function (req, res) {
        res.redirect("/index.html");
    });

    console.log("Server init at http://" + hostname + ":" + port);

    app.listen(port, hostname);

