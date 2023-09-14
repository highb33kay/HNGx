const PORT = process.env.PORT || 4000;

module.exports = {
  PORT: PORT,
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost/hngx",
};
