const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/cameraDB', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', (error) => console.error(error));
mongoose.connection.once('open', () => console.log('Connected to MongoDB'));

const Snapshot = mongoose.model('Snapshot', {
    dataURL: String,
});

app.use(bodyParser.json());

app.post('/saveSnapshot', (req, res) => {
    const { dataURL } = req.body;

    const snapshot = new Snapshot({ dataURL });
    snapshot.save()
        .then(() => res.status(200).json({ message: 'Snapshot saved successfully' }))
        .catch((error) => res.status(500).json({ error }));
});

app.get('/getSnapshots', (req, res) => {
    Snapshot.find()
        .then((snapshots) => res.status(200).json(snapshots))
        .catch((error) => res.status(500).json({ error }));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

