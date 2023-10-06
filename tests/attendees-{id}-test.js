'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /attendees/{id}', function() {
    describe('tests for delete', function() {
        it('should respond 201 for "OK, attendee removed successfully"', function() {
            var response = request('delete', 'http://localhost:3002/attendees/-73155916', { 
                'qs': {"apiKey":"mollit"},
                'time': true
            });

            expect(response).to.have.status(201);
            return chakram.wait();
        });


        it('should respond 400 for "Bad request. Attendee id is invalid."', function() {
            var response = request('delete', 'http://localhost:3002/attendees/225197', { 
                'qs': {"apiKey":"in ex"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('delete', 'http://localhost:3002/attendees/-24923483', { 
                'qs': {"apiKey":"adipisicing labore"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });
    
    });
    
    describe('tests for get', function() {
        it('should respond 200 for "OK"', function() {
            var response = request('get', 'http://localhost:3002/attendees/-63872978', { 
                'qs': {"apiKey":"mollit Duis ullamco"},
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('get', 'http://localhost:3002/attendees/18479441', { 
                'qs': {"apiKey":"dolore et veniam non"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });


        it('should respond 404 for "Attendee was not found"', function() {
            var response = request('get', 'http://localhost:3002/attendees/86870701', { 
                'qs': {"apiKey":"aute irure mollit velit nisi"},
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });
    
    });
    
    describe('tests for patch', function() {
        it('should respond 201 for "OK, attendee edited successfully"', function() {
            var response = request('patch', 'http://localhost:3002/attendees/-74211593', { 
                'qs': {"apiKey":"laborum do labore nulla eu"},
                'time': true
            });

            expect(response).to.have.status(201);
            return chakram.wait();
        });


        it('should respond 400 for "Bad request. Attendee body is invalid."', function() {
            var response = request('patch', 'http://localhost:3002/attendees/70611504', { 
                'qs': {"apiKey":"tempor incididunt mollit ipsum labore"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('patch', 'http://localhost:3002/attendees/49400420', { 
                'qs': {"apiKey":"veniam"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });
    
    });
});