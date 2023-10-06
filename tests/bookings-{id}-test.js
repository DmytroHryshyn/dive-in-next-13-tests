'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /bookings/{id}', function() {
    describe('tests for get', function() {
        it('should respond 200 for "OK"', function() {
            var response = request('get', 'http://localhost:3002/v1/bookings/50954092', { 
                'qs': {"apiKey":"nulla"},
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('get', 'http://localhost:3002/v1/bookings/85268394', { 
                'qs': {"apiKey":"voluptate dolore"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });


        it('should respond 404 for "Booking was not found"', function() {
            var response = request('get', 'http://localhost:3002/v1/bookings/84584491', { 
                'qs': {"apiKey":"amet sunt sed nisi"},
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });
    
    });
    
    describe('tests for patch', function() {
        it('should respond 200 for "OK, booking edited successfully"', function() {
            var response = request('patch', 'http://localhost:3002/v1/bookings/-65196923', { 
                'qs': {"apiKey":"laborum irure in ea"},
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 400 for "Bad request. Booking body is invalid."', function() {
            var response = request('patch', 'http://localhost:3002/v1/bookings/9085428', { 
                'qs': {"apiKey":"nulla eu reprehenderit dolore"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('patch', 'http://localhost:3002/v1/bookings/-46675308', { 
                'qs': {"apiKey":"qui sed ut ullamco"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });
    
    });
});