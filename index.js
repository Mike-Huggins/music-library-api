const mongoose = require('mongoose');
const app = require('./src/app');

mongoose.connect(process.env.DATABASE_CONN, { useNewUrlParser: true }, () => {
  app.listen(3000);
  console.log('Listening on port 3000!')
});
