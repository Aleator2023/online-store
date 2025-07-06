require('dotenv').config();
const express = require('express');
const sequelize  = require('./db');
const models = require('./models/models');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandingMiddleware');
const path = require('path');

const PORT = process.env.PORT || 5001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname,'static'))); // Serve static files from the 'static' directory
app.use(fileUpload({}));
app.use('/api', router);


// Error handling middleware should be the last middleware
app.use(errorHandler);




const start = async () => {
    try {
        console.log("🔍 Checking database connection...");
        await sequelize.authenticate();
        console.log("✅ Database connected!");

        console.log("🔄 Syncing database...");
        await sequelize.sync();
        console.log("✅ Database synchronized!");

        app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));
    } catch (e) {
        console.error("❌ Error starting server:", e);
    }
};
start();