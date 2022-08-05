const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRouter = require('./routes/routes');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', apiRouter);

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

require('./models/db');
