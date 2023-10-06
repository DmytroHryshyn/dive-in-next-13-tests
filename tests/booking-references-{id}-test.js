'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /booking-references/{id}', function() {
    describe('tests for delete', function() {
        it('should respond 201 for "OK, bookingReference removed successfully"', function() {
            var response = request('delete', 'http://localhost:3002/v1/booking-references/25868991', { 
                'qs': {"apiKey":"consectetur veniam"},
                'time': true
            });

            expect(response).to.have.status(201);
            return chakram.wait();
        });


        it('should respond 400 for "Bad request. BookingReference id is invalid."', function() {
            var response = request('delete', 'http://localhost:3002/v1/booking-references/48483303', { 
                'qs': {"apiKey":"cupidatat pariatur"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('delete', 'http://localhost:3002/v1/booking-references/24006639', { 
                'qs': {"apiKey":"in do velit minim aliquip"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });
    
    });
    
    describe('tests for get', function() {
        it('should respond 200 for "OK"', function() {
            var response = request('get', 'http://localhost:3002/v1/booking-references/-79794', { 
                'qs': {"apiKey":"voluptate anim consectetur aliqua velit"},
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('get', 'http://localhost:3002/v1/booking-references/-70831437', { 
                'qs': {"apiKey":"Duis incididunt labore"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });


        it('should respond 404 for "BookingReference was not found"', function() {
            var response = request('get', 'http://localhost:3002/v1/booking-references/-79558694', { 
                'qs': {"apiKey":"ullamco"},
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });
    
    });
    
    describe('tests for patch', function() {
        it('should respond 201 for "OK, BookingReference edited successfully"', function() {
            var response = request('patch', 'http://localhost:3002/v1/booking-references/-87538378', { 
                'qs': {"apiKey":"non sit nostrud"},
                'time': true
            });

            expect(response).to.have.status(201);
            return chakram.wait();
        });


        it('should respond 400 for "Bad request. BookingReference body is invalid."', function() {
            var response = request('patch', 'http://localhost:3002/v1/booking-references/-6937391', { 
                'qs': {"apiKey":"sit reprehenderit in minim"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('patch', 'http://localhost:3002/v1/booking-references/72783198', { 
                'qs': {"apiKey":"irure proident et ut"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });
    
    });
});