require('dotenv').config()

module.exports = {
    PORT: process.env.PORT,
    DB_URL: process.env.MONGODB_URI,
};
