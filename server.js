const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());

// Simulate API Call (Promise)
function simulateApiCall() {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 5000) + 1000; 
    const shouldSucceed = Math.random() > 0.5; 

    setTimeout(() => {
      if (shouldSucceed) {
        resolve("Data fetched successfully from the API!");
      } else {
        reject("API failed to fetch data.");
      }
    }, delay);
  });
}

app.get('/api/data', async (req, res) => {
  try {
    const result = await simulateApiCall();
    res.status(200).json({ message: result });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});


app.listen(port, () => {
  console.log(`Backend running on PORT : ${port}`);
});
