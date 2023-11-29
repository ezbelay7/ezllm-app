
// // Existing GET endpoint
// app.get('/api/test', (req, res) => {
//   res.json({ message: 'Hello from the backend!' });
// });

// // New POST endpoint for chat
// app.post('/api/chat', (req, res) => {
//   const userMessage = req.body.message;
//   const responseMessage = `${userMessage} Backend works!`;
//   res.json({ message: responseMessage });
// });

const express = require('express');
const cors = require('cors');
const { PythonShell } = require('python-shell');
const app = express();
const port = 3001;

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON body
app.use(express.json());

// POST endpoint for chat
app.post('/api/chat', async (req, res) => {
  console.log("Received message from frontend:", req.body.message);
  const userMessage = req.body.message;
  const responseMessage = `Recieved on Backend: "${userMessage}"`;
  res.json({ message: responseMessage });

  // let options = {
  //   mode: 'text',
  //   pythonOptions: ['-u'], // get print results in real-time
  //   args: [userMessage] // arguments to pass to the Python script
  // };

  // PythonShell.run('text_generator.py', options, function (err, results) {
  //   if (err) {
  //     console.error('Error:', err);
  //     res.status(500).send('Error processing the text generation');
  //   } else {
  //     console.log("Response from Python script:", results[0]);
  //     // results is an array consisting of messages collected during execution
  //     res.json({ message: results[0] });
  //   }
  // });
  
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
