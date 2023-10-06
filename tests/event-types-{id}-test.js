'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /event-types/{id}', function() {
    describe('tests for delete', function() {
        it('should respond 201 for "OK, eventType removed successfully"', function() {
            var response = request('delete', 'http://localhost:3002/v1/event-types/61132002', { 
                'qs': {"apiKey":"ut ex sint"},
                'time': true
            });

            expect(response).to.have.status(201);
            return chakram.wait();
        });


        it('should respond 400 for "Bad request. EventType id is invalid."', function() {
            var response = request('delete', 'http://localhost:3002/v1/event-types/-37167400', { 
                'qs': {"apiKey":"esse"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('delete', 'http://localhost:3002/v1/event-types/10377737', { 
                'qs': {"apiKey":"aute consectetur"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });
    
    });
    
    describe('tests for get', function() {
        it('should respond 200 for "OK"', function() {
            var response = request('get', 'http://localhost:3002/v1/event-types/4', { 
                'qs': {"apiKey":"et culpa in id"},
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('get', 'http://localhost:3002/v1/event-types/4', { 
                'qs': {"apiKey":"Ut quis sit ut"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });


        it('should respond 404 for "EventType was not found"', function() {
            var response = request('get', 'http://localhost:3002/v1/event-types/4', { 
                'qs': {"apiKey":"sunt est ad non nostrud"},
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });
    
    });
    
    describe('tests for patch', function() {
        it('should respond 201 for "OK, eventType edited successfully"', function() {
            var response = request('patch', 'http://localhost:3002/v1/event-types/34325568', { 
                'qs': {"apiKey":"dolore"},
                'time': true
            });

            expect(response).to.have.status(201);
            return chakram.wait();
        });


        it('should respond 400 for "Bad request. EventType body is invalid."', function() {
            var response = request('patch', 'http://localhost:3002/v1/event-types/79315094', { 
                'qs': {"apiKey":"id ea culpa quis"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('patch', 'http://localhost:3002/v1/event-types/-71393780', { 
                'qs': {"apiKey":"sunt enim"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });
    
    });
});