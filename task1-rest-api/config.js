const PORT = process.env.PORT || 4000;

module.exports = {
  PORT: PORT,
  MONGODB_URI:
    process.env.MONGODB_URI ||
    "mongodb+srv://highb33kay:roxtDLTg3DJ7hHLG@cluster0.fjeztut.mongodb.net/?retryWrites=true&w=majority",
};
