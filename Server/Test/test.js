import chai, { expect } from 'chai';
import chaiHTTP from 'chai-http';
import app from '../app';


chai.use(chaiHTTP);

// ================================ Test Get Endpoint ================================================
const userInfo = {
  firstname: 'John',
  lastname: 'Smith',
  phonenumber: 78650000,
  email: 'john@gmail.com',
  password:'123'

};
const records = {
  title: 'Corruption at Nyakabanda sector',
  type: 'Corruption',
  location: 'Nyakabanda',
  status: 'pending',
  comment:'Three men reicieved corrution to make first services'

};
describe('Testing APIs', () => {
  it('Checking the status of the api', (tester) => {
    chai
      .request(app)
      .get('/api/v1/redflag')
      .end((err, res) => {
        expect(res.status).to.equals(400);
        expect(res.body).to.be.an('object');
        tester();
      });
  });
  it('Checking data to be Entered', (tester) => {
    chai
      .request(app)
      .get('/api/v1/redflag/:id')
      .end((err, res) => {
        expect(res.status).to.equals(400);
        expect(res.firstname).to.not.be.an('');
        tester();
      });
  });
  it('Checking the user info is not empty', (tester) => {
    chai
      .request(app)
      .post('/api/v1/redflag')
      .send(userInfo)
      .end((err, res) => {
        expect(res.body.firstname).to.not.equal('');
        expect(res.body.lastname).to.not.be.equal('');
        expect(res.body.email).to.not.be.equal('');
        expect(res.body.phonenumber).to.not.be.equal('');
        tester();
      });
  });
  it('Checking the user info data', (tester) => {
    chai
      .request(app)
      .post('/api/v1/redflag')
      .send(userInfo)
      .end((err, res) => {
        expect(res.status).to.be.equal(400);
        tester();
      });
      it('Checking modify api', (tester) => {
        chai
          .request(app)
          .put('/api/v1/redflag/:id')
          .send(records)
          .end((err, res) => {
            expect(res.status).to.be.equal(400);
            tester();
          });
        });

        it('Checking sign up ', (tester) => {
          chai
            .request(app)
            .post('/api/v1/signup')
            .send(userInfo)
            .end((err, res) => {
              expect(res.status).to.be.equal(400);
              tester();
            });
          });
          it('Checking sign in ', (tester) => {
            chai
              .request(app)
              .post('/api/v1/signin')
              .send(userInfo)
              .end((err, res) => {
                expect(res.status).to.be.equal(400);
                tester();
              });
            });  
  });
});

