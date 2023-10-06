'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /attendees', function() {
    describe('tests for get', function() {
        it('should respond 200 for "OK"', function() {
            var response = request('get', 'http://localhost:3002/v1/attendees', { 
                'qs': {"apiKey":"veniam Excepteur nisi irure"},
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('get', 'http://localhost:3002/v1/attendees', { 
                'qs': {"apiKey":"dolor dolor aliqua nostrud occaecat"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });


        it('should respond 404 for "No attendees were found"', function() {
            var response = request('get', 'http://localhost:3002/v1/attendees', { 
                'qs': {"apiKey":"cillum pariatur irure"},
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });
    
    });
    
    describe('tests for post', function() {
        it('should respond 201 for "OK, attendee created"', function() {
            var response = request('post', 'http://localhost:3002/v1/attendees', { 
                'qs': {"apiKey":"sunt do qui"},
                'time': true
            });

            expect(response).to.have.status(201);
            return chakram.wait();
        });


        it('should respond 400 for "Bad request. Attendee body is invalid."', function() {
            var response = request('post', 'http://localhost:3002/v1/attendees', { 
                'qs': {"apiKey":"non ad magna sunt sint"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('post', 'http://localhost:3002/v1/attendees', { 
                'qs': {"apiKey":"nisi magna adipisicing in consectetur"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });
    
    });
});