'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /teams/{teamId}/event-types', function() {
    describe('tests for get', function() {
        it('should respond 200 for "OK"', function() {
            var response = request('get', 'http://localhost:3002/v1/teams/-29777647.567326233/event-types', { 
                'qs': {"apiKey":"id"},
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('get', 'http://localhost:3002/v1/teams/-92796680.55997315/event-types', { 
                'qs': {"apiKey":"ullamco veniam cillum reprehenderit nulla"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });


        it('should respond 404 for "No event types were found"', function() {
            var response = request('get', 'http://localhost:3002/v1/teams/-84689890.02932519/event-types', { 
                'qs': {"apiKey":"commodo nostrud dolore sunt exercitation"},
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });
    
    });
});