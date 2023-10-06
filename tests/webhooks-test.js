'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /webhooks', function() {
    describe('tests for get', function() {
        it('should respond 200 for "OK"', function() {
            var response = request('get', 'http://localhost:3002/webhooks', { 
                'qs': {"apiKey":"Lorem elit qui Excepteur"},
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('get', 'http://localhost:3002/webhooks', { 
                'qs': {"apiKey":"elit amet aute"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });


        it('should respond 404 for "No webhooks were found"', function() {
            var response = request('get', 'http://localhost:3002/webhooks', { 
                'qs': {"apiKey":"amet"},
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });
    
    });
    
    describe('tests for post', function() {
        it('should respond 201 for "OK, webhook created"', function() {
            var response = request('post', 'http://localhost:3002/webhooks', { 
                'qs': {"apiKey":"in"},
                'time': true
            });

            expect(response).to.have.status(201);
            return chakram.wait();
        });


        it('should respond 400 for "Bad request. webhook body is invalid."', function() {
            var response = request('post', 'http://localhost:3002/webhooks', { 
                'qs': {"apiKey":"amet"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('post', 'http://localhost:3002/webhooks', { 
                'qs': {"apiKey":"cupidatat ad do in"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });
    
    });
});