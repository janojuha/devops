var request = require("request"),
    assert = require('assert'),
    appUnderTest = require("../hello.js"),
    base_url = "http://localhost:6001/";

describe("/ URL responses without error", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it("returns expected test", function(done) {
      request.get(base_url, function(error, response, body) {
        assert.equal("<html><head></head><body><h1>Test ok</h1></body></html>", body);
        done();
      });
    });
  });
});