const express = require('express');
require('dotenv').config();
const app = express();
var cors = require('cors')
// Middleware for parsing JSON
app.use(express.json());
app.use(cors({
    origin: 'https://hostel-enclave.vercel.app'
}));

const connectDB = require('./config/dbConnection.js');
connectDB();

const userRoutes = require("./routes/userRoutes.js");

const port = process.env.PORT || 5000;

app.use('/', userRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
