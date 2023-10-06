'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /custom-inputs', function() {
    describe('tests for get', function() {
        it('should respond 200 for "OK"', function() {
            var response = request('get', 'http://localhost:3002/v1/custom-inputs', { 
                'qs': {"apiKey":"qui"},
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('get', 'http://localhost:3002/v1/custom-inputs', { 
                'qs': {"apiKey":"officia reprehenderit labore mollit"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });


        it('should respond 404 for "No eventTypeCustomInputs were found"', function() {
            var response = request('get', 'http://localhost:3002/v1/custom-inputs', { 
                'qs': {"apiKey":"Lorem in"},
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });
    
    });
    
    describe('tests for post', function() {
        it('should respond 201 for "OK, eventTypeCustomInput created"', function() {
            var response = request('post', 'http://localhost:3002/v1/custom-inputs', { 
                'qs': {"apiKey":"aliquip"},
                'time': true
            });

            expect(response).to.have.status(201);
            return chakram.wait();
        });


        it('should respond 400 for "Bad request. EventTypeCustomInput body is invalid."', function() {
            var response = request('post', 'http://localhost:3002/v1/custom-inputs', { 
                'qs': {"apiKey":"cillum"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('post', 'http://localhost:3002/v1/custom-inputs', { 
                'qs': {"apiKey":"in dolore minim et sit"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });
    
    });
});