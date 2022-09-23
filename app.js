const express = require('express');
const app = express();

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send(`
        <html>
            <head>
                <title>
                    HomePage
                </title>
            </head>
            <body>
                <h1>
                    -> Standard Homepage <-
                </h1>
            </body>
        </html>
    `);
});

app.get('/puppies', (req, res) => {
  res.send(`
  <html>
      <head>
          <title>
              Puppies Page
          </title>
      </head>
      <body>
          <h1>
              -> Puppy Page <-
          </h1>
      </body>
  </html>
`);
});

app.get('/kittens', (req, res) => {
  res.send(`
  <html>
      <head>
          <title>
              Kittens Page
          </title>
      </head>
      <body>
            <h1>
                -> Kitty Page <-
            </h1>
      </body>
  </html>
`);
});

const get = 'testing';
