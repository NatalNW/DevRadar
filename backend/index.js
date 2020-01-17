const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack10@devradar-t7vfb.gcp.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json());

app.get('/', (request, response) => {
    return response.json({ message: 'Hello Word'});
});

app.listen(3333);