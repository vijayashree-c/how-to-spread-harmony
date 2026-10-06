const http = require("http");

const hostname = "0.0.0.0";
const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>How to Spread Harmony</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    margin: 50px;
                }

                h1 {
                    font-size: 40px;
                }

                li {
                    margin: 15px;
                    font-size: 20px;
                }
            </style>
        </head>

        <body>

            <h1>How to Spread Harmony</h1>

            <p>Small positive actions can create a peaceful environment.</p>

            <ol>
                <li>Listen to others with respect.</li>
                <li>Help people when they need support.</li>
                <li>Communicate politely.</li>
                <li>Respect different opinions.</li>
                <li>Share kindness and positivity.</li>
            </ol>

            <h2>Spread Kindness. Build Harmony.</h2>

        </body>
        </html>
    `);
});

server.listen(port, hostname, () => {
    console.log(`Harmony app running on port ${port}`);
});