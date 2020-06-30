const mongoose = require('mongoose');

const db = mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Database connected...');
});

module.exports = db;
