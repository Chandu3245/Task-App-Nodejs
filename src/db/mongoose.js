const mongoose = require('mongoose');

mongoose.connect(process.env.DB_CONNECTION_URL, {
    useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false
})