const express = require('express');
const app = express();
const port = 9080;

app.use(express.urlencoded({ extended: true }));

app.post('/save-name', (req, res) => {
  const name = req.body.name;
  // handle saving the name to the database or performing other necessary actions
  res.send('Name saved successfully');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
