
// // // Existing GET endpoint
// // app.get('/api/test', (req, res) => {
// //   res.json({ message: 'Hello from the backend!' });
// // });

// // // New POST endpoint for chat
// // app.post('/api/chat', (req, res) => {
// //   const userMessage = req.body.message;
// //   const responseMessage = `${userMessage} Backend works!`;
// //   res.json({ message: responseMessage });
// // });

// const express = require('express');
// const cors = require('cors');
// const app = express();
// const port = 3001;

// // Enable CORS for all routes
// app.use(cors());

// // Middleware to parse JSON body
// app.use(express.json());

// // POST endpoint for chat
// app.post('/api/chat', async (req, res) => {
//   console.log("Received message from frontend:", req.body.message);
//   const userMessage = req.body.message;
//   const responseMessage = `Recieved on Backend: "${userMessage}"`;
//   res.json({ message: responseMessage });


// });

// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });
const express = require('express');
const cors = require('cors');
const { spawn } = require('child_process');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/chat', (req, res) => {
  console.log("Received message from frontend:", req.body.message);
  const userMessage = req.body.message;

  // Spawn Python process
  const pythonProcess = spawn('python3', ['../python-backend/text_generator.py', userMessage]);

  let pythonOutput = '';

  pythonProcess.stdout.on('data', (data) => {
    pythonOutput += data.toString();
  });

  pythonProcess.on('close', (code) => {
    if (code !== 0) {
      console.error(`Python script exited with code ${code}`);
      return res.status(500).json({ message: 'Error in Python script' });
    }
    res.json({ message: pythonOutput });
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
