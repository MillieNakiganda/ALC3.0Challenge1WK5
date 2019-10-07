const chai = require('chai');

const chaiHttp = require('chai-http');

const assert = require('assert');

const should = chai.should();
chai.use(chaiHttp);
const server = require('../index');

describe('/GET', () => {
  it('it should GET all the redflags', (done) => {
    chai.request(server)
      .get('/api/v1/red-flags')
      .end((err, res) => {
        (res).should.have.status(200);
        // (res.body).should.be.a('object');
        // (res.body.podcasts.length).should.be.eql(1);
        done();
      });
  });

  it('it should GET all the podcast', (done) => {
    chai.request(server)
      .get('/api/v1/red-flags')
      .end((err, res) => {
        (res).should.have.status(200);
        // (res.body).should.be.a('object');
        // (res.body.podcasts.length).should.be.eql(1);
        done();
      });
  });
});
// mocha ./api/test/test.js

describe('/POST', () => {
  it('it should create users', (done) => {
    chai.request(server)
      .post('/api/v1/users')
      .end((err, res) => {
        (res).should.have.status(200);
        // (res.body).should.be.a('object');
        // (res.body.podcasts.length).should.be.eql(1);
        done();
      });
  });
  it('it should create incidents', (done) => {
    chai.request(server)
      .post('/api/v1/reportincident')
      .end((err, res) => {
        (res).should.have.status(200);
        // (res.body).should.be.a('object');
        // (res.body.podcasts.length).should.be.eql(1);
        done();
      });
  });
  it('it should create incidents', (done) => {
    chai.request(server)
      .post('/api/v1/red-flags')
      .end((err, res) => {
        (res).should.have.status(200);
        // (res.body).should.be.a('object');
        // (res.body.podcasts.length).should.be.eql(1);
        done();
      });
  });
});

describe('/PATCH', () => {
  it('update redflag', (done) => {
    chai.request(server)
      .post('/api/v1/red-flags/:id/location')
      .end((err, res) => {
        (res).should.have.status(404);
        // (res.body).should.be.a('object');
        // (res.body.podcasts.length).should.be.eql(1);
        done();
      });
  });
  it('update redflag comment', (done) => {
    chai.request(server)
      .post('/api/v1/red-flags/:id/comment')
      .end((err, res) => {
        (res).should.have.status(404);
        // (res.body).should.be.a('object');
        // (res.body.podcasts.length).should.be.eql(1);
        done();
      });
  });
});

describe('/DELETE', () => {
  it('delete specific red flag', (done) => {
    chai.request(server)
      .post('/api/v1/red-flags/:id')
      .end((err, res) => {
        (res).should.have.status(404);
        // (err).should.have.status(404);
        // (res.body).should.be.a('object');
        // (res.body.podcasts.length).should.be.eql(1);
        done();
      });
  });
});
