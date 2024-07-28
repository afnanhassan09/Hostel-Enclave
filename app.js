const express = require('express');
require('dotenv').config();
const cors = require('cors');
const connectDB = require('./config/dbConnection.js');
const userRoutes = require("./routes/userRoutes.js");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
    origin: 'https://hostel-enclave.vercel.app'
}));

connectDB();

app.use('/', userRoutes);

const url = 'https://hostel-enclave.onrender.com/hostels';
async function sendGetRequest() {
    try {
        const fetch = await import('node-fetch');
        const response = await fetch.default(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Data received:');
    } catch (error) {
        console.error('Failed to fetch:', error);
    }
}

setInterval(sendGetRequest, 1 * 60 * 1000);

sendGetRequest();

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
