const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors')
const questions = require('./routes/questions');

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.use('/api/questions', questions);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
