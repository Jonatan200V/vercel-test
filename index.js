import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({
    'Hola Mundo': 'Soy Jonatan',
  });
});

app.listen(4000, () => console.log('Running server is PORT 4000'));
