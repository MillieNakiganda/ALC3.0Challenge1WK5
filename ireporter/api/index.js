const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// for gets, we are going to check if the retrieved object is 0
// for posts, if sth is missing in the requiredparameters
const users = [];
const incidents = [];
app.post('/api/v1/users', (req, res) => {
  if (!req.body.id || !req.body.firstname || !req.body.lastname || !req.body.othernames) {
    res.json({
      status: 400,
      error: 'missing parameter'
    });
  } else {
    const user = {
      id: req.body.id,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      othernames: req.body.othernames,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      username: req.body.username,
      isregistered: req.body.isregistered,
      isAdmin: req.body.isAdmin
    };
    users.push(user);
    res.json({
      status: 200,
      data: users
    });
  }
});

app.post('/api/v1/reportincident', (req, res) => {
  if (!req.body.createdBy || !req.body.location || !req.body.id || !req.body.type) {
    res.json({
      status: 400,
      error: 'missing parameter'
    });
  } else {
    const incident = {
      id: req.body.id,
      createdOn: req.body.createdOn,
      createdBy: req.body.createdBy,
      type: req.body.type,
      location: req.body.location,
      status: req.body.status,
      Images: req.body.images,
      Videos: req.body.videos,
      comment: req.body.comment
    };
    incidents.push(incident);
    res.json({
      status: 200,
      data: incidents
    });
  }
  res.status(200).send(res.Status);
});

app.get('/api/v1/red-flags', (req, res) => {
  if (Array.isArray(users)) {
    res.json({
      status: 400,
      error: 'missing parameter'
    });
  } else {
    res.json({
      status: 200,
      error: 'successful'
    });
  }
  // res.status(200).send('send');
});

app.get('/api/v1/red-flags/:id', (req, res) => {
  incidents.map((todo) => {
    if (todo.id === parseInt(req.params.id, 10)) {
      return res.json({
        status: 200,
        error: 'successful' // ad data array
      });
    }
    return res.status(404).send({
      success: 'false',
      error: 'item does not exist',
    });
  });
});

app.post('/api/v1/red-flags', (req, res) => {
  res.status(200).send(res.Status);
});

app.patch('/api/v1/red-flags/:id/location', (req, res) => {
  incidents.map((todo) => {
    if (todo.id === parseInt(req.params.id, 10)) {
      return res.json({
        status: 200,
        error: 'successful' // ad data array
      });
    }
    return res.status(404).send({
      success: 'false',
      error: 'item does not exist',
    });
  });
});

app.patch('/api/v1/red-flags/:id/comment', (req, res) => {
  incidents.map((todo) => {
    if (todo.id === parseInt(req.params.id, 10)) {
      return res.json({
        status: 200,
        error: 'successful' // ad data array
      });
    }
    return res.status(404).send({
      success: 'false',
      error: 'item does not exist',
    });
  });
});

app.delete('/api/v1/red-flags/:id', (req, res) => {
  incidents.map((todo) => {
    if (todo.id === parseInt(req.params.id, 10)) {
      return res.json({
        status: 200,
        error: 'successful' // ad data array
      });
    }
    return res.status(404).send({
      success: 'false',
      error: 'item does not exist',
    });
  });
});

app.listen(9000, () => {
  console.log('listening on port 3000');
});

module.exports = app;
