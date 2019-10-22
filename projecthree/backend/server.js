const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const adminRoutes = express.Router();
const PORT = 4000;

let admin = require('./admin.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/ratemyadmin', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

adminRoutes.route('/').get(function(req, res) {
    ratemyadmin.find(function(err, ratemyadmin) {
        if (err) {
            console.log(err);
        }   else {
            res.json(ratemyadmin)
        }
    });
});

adminRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id
    ratemyadmin.findById(id, function(err, ratemyadmin){
        res.json(ratemyadmin);
    })
})

adminRoutes.route('/add').post(function(req, res){
    let ratemyadmin = new admin(req.body);
    ratemyadmin.save()
    .then(ratemyadmin => {
        res.status(200).json({admin: 'admin added successfully'});
    })
    .catch(err => {
        res.status(400).send('adding new admin failed');
    })
});

adminRoutes.route('/update/:id').post(function(req, res){
    ratemyadmin.findByID(req.params.id, function(err, ratemyadmin){
        if (!ratemyadmin)
            res.status(404).send('data is not found');
        else
            ratemyadmin.admin_description = req.body.admin_description;
            ratemyadmin.admin_responsible = req.body.admin_responsible;
            ratemyadmin.admin_priority = req.body.admin_priority;
            ratemyadmin.admin_completed = req.body.admin_completed;

            ratemyadmin.save().then(ratemyadmin => {
                res.json('Ratemyadmin updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            })
    })
})

app.use('/ratemyadmin', adminRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});