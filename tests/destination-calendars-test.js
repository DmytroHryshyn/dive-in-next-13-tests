'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /destination-calendars', function() {
    describe('tests for get', function() {
        it('should respond 200 for "OK"', function() {
            var response = request('get', 'http://localhost:3002/destination-calendars', { 
                'qs': {"apiKey":"pariatur laboris ut"},
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('get', 'http://localhost:3002/destination-calendars', { 
                'qs': {"apiKey":"dolor sint non sit"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });


        it('should respond 404 for "No destination calendars were found"', function() {
            var response = request('get', 'http://localhost:3002/destination-calendars', { 
                'qs': {"apiKey":"laborum esse sint voluptate aute"},
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });
    
    });
    
    describe('tests for post', function() {
        it('should respond 201 for "OK, destination calendar created"', function() {
            var response = request('post', 'http://localhost:3002/destination-calendars', { 
                'qs': {"apiKey":"sunt elit dolor nisi"},
                'time': true
            });

            expect(response).to.have.status(201);
            return chakram.wait();
        });


        it('should respond 400 for "Bad request. DestinationCalendar body is invalid."', function() {
            var response = request('post', 'http://localhost:3002/destination-calendars', { 
                'qs': {"apiKey":"elit quis consectetur magna"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('post', 'http://localhost:3002/destination-calendars', { 
                'qs': {"apiKey":"mollit id cupidatat"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });
    
    });
});