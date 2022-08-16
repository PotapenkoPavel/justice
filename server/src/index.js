const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRouter = require('./routes');
const path = require('path')

app.use(require('morgan')('dev'))
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', apiRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../client/build')))

  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'))
  })
}

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

require('./models/db');
