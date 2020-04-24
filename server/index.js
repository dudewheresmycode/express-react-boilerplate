import express from 'express';

const app = express();

// NOTE: If using a port other than 8000 for local development,
// you'll need to also change the value for proxy in client/package.json
const port = process.env.PORT || 8000;

// Serve React build files
app.use(express.static(`${process.cwd()}/client/build`));

app.get('/ping', (req, res) => {
  res.json({ data: 'pong' });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
