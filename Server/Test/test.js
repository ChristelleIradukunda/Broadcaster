/* eslint-disable no-undef */
import chai from 'chai';
import chaiHTTP from 'chai-http';
import app from '../app';


chai.use(chaiHTTP);
const {expect} = chai;

// ================================ Test Get Endpoint ================================================
const userInfo = {
  firstname: 'John',
  lastname: 'Smith',
  phoneNumber: 78650000,
  email: 'john@gmail.com',
  userName: 'John123',
  password:'12'

};

describe('Testing APIs', () => {
  it('Checking the status when info is wrong', (done) => {
    chai
      .request(app)
      .post('/api/v1/signup')
      .send(
        {email: 'john@gmail.com',
        password:'12'}
      )
      .end((err, res) => {
        expect(res.status).to.equals(400);
        done();
       
      });
  });
  
  it('Checking the sign in api', (done) => {
    chai
      .request(app)
      .post('/api/v1/signup')
      .send(userInfo)
      .end((err, res) => {
        expect(res.status).to.equals(400);
        done();
       
      });
  });

  it('Checking the post api', (done) => {
    chai
      .request(app)
      .post('/api/v1/redflag')
      .send(userInfo)
      .end((err, res) => {
        expect(res.status).to.equals(400);
        done();
       
      });
  });
  it('Checking GET api', (done) => {
    chai
      .request(app)
      .get('/api/v1/redflag')
      .end((err, res) => {
        expect(res.status).to.equals(400);
        done();
       
      });
  });
  it('Checking DELETE api', (done) => {
    chai
      .request(app)
      .delete('/api/v1/redflag/:id')
      .end((err, res) => {
        expect(res.status).to.equals(400);
        done();
      });
  });
});

