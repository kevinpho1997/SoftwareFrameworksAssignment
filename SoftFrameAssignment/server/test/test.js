var assert = require('assert');
var app = require('../server.js');
let chai = require('chai');
let chaiHttp = require('chai-http');
// const { get} = require('http');
chai.use(chaiHttp);
let should = chai.should();

describe('Server integration test', function() {
    // The function passed to before() is called before running the test cases.
    before(function() {
        console.log("before test");
    });
    // The function passed to after() is called after running the test cases.
    after(function() {
        console.log("after test");
        // run mongo here to delete things in database
    });
    // test get all users
    describe('/users', () => {
        it('it should GET all users', (done) => {
            chai.request(app).get('/users')
                .end((err, res) => {
                    // console.log("RESPONSE", res.body);
                    // should.exist(res.body);
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });
    // test register user
    describe('/user/create', () => {                                            
        it('it should insert a doc (user)', (done) => {
            chai.request(app)
                .post('/user/create').type('form').send({ 'username': "newUsername", "userid": 30, 'email': "email@email.com", 'description': 'My description', "birthdate": "2021-01-01", "userage":100, "role":"super"})
                .end((err, res) => {
                    // test 1
                    res.should.have.status(200);
                    //  test 2
                    res.body.should.be.a('array');
                    done();
                });
        });
        it('it should return valid: false', (done) => {
            chai.request(app)
                .post('/user/create').type('form').send({ 'username': "newUsername", "userid": 30, 'email': "email@email.com", 'description': 'My description', "birthdate": "2021-01-01", "userage":100, "role":"super"})
                .end((err, res) => {
                    // test 1
                    res.should.have.status(200);
                    //  test 2
                    res.body.should.have.property('valid').to.be.false;
                    done();
                });
        });
    });
});