const should = require("should");
const request = require("request");
const expect = require("chai").expect;
const baseUrl = "http://localhost:3000/api/v1";
const util = require("util");

describe('returns users', function() {

    it('returns users', function(done) {
        request.get({ url: baseUrl + '/user' },
            function(error, response, body) {
            		expect(response.statusCode).to.equal(200);
                done();
            });
    });

    it('returns 200 single user founded', function(done) {
        request.get({ url: baseUrl + '/user/d025b9be-5ba2-447f-b744-98facffeb02f' },
            function(error, response, body) {
            		expect(response.statusCode).to.equal(200);
                done();
            });
    });


    


},5000);