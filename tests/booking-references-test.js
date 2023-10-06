'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /booking-references', function() {
    describe('tests for get', function() {
        it('should respond 200 for "OK"', function() {
            var response = request('get', 'http://localhost:3002/booking-references', { 
                'qs': {"apiKey":"eu amet"},
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('get', 'http://localhost:3002/booking-references', { 
                'qs': {"apiKey":"culpa exercitation tempor aliqua"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });


        it('should respond 404 for "No booking references were found"', function() {
            var response = request('get', 'http://localhost:3002/booking-references', { 
                'qs': {"apiKey":"deserunt non officia"},
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });
    
    });
    
    describe('tests for post', function() {
        it('should respond 201 for "OK,  booking reference created"', function() {
            var response = request('post', 'http://localhost:3002/booking-references', { 
                'qs': {"apiKey":"proident nulla"},
                'time': true
            });

            expect(response).to.have.status(201);
            return chakram.wait();
        });


        it('should respond 400 for "Bad request. BookingReference body is invalid."', function() {
            var response = request('post', 'http://localhost:3002/booking-references', { 
                'qs': {"apiKey":"Duis qui"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('post', 'http://localhost:3002/booking-references', { 
                'qs': {"apiKey":"Duis ullamco eu in commodo"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });
    
    });
});