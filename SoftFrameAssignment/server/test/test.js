var assert = require('assert');
var app = require('../server.js');
let chai = require('chai');
let chaiHttp = require('chai-http');
// const { get} = require('http');
chai.use(chaiHttp);

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
});