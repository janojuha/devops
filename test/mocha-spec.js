var rewire = require('rewire');
var chai = require('chai');
var expect = chai.expect;
var cfenv = require('cfenv');
var appEnv = cfenv.getAppEnv();
var base_url = "http://localhost:"+appEnv.port;
var request = require("request");

chai.config.includeStack = false;

describe("/ URL responses without error targeting port: " +appEnv.port , function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
		expect(response.statusCode).to.be.equal(200);
        done();
      });
    });

    it("returns expected test", function(done) {
      request.get(base_url, function(error, response, body) {
		expect(body).to.be.equal("<html><head></head><body><h1>Test ok</h1></body></html>");
        done();
      });
    });
  });
});