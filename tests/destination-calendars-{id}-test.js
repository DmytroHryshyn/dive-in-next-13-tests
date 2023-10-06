'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /destination-calendars/{id}', function() {
    describe('tests for get', function() {
        it('should respond 200 for "OK"', function() {
            var response = request('get', 'http://localhost:3002/destination-calendars/-43381969', { 
                'qs': {"apiKey":"nostrud velit"},
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('get', 'http://localhost:3002/destination-calendars/-80918370', { 
                'qs': {"apiKey":"consectetur ad cupidatat non"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });


        it('should respond 404 for "DestinationCalendar was not found"', function() {
            var response = request('get', 'http://localhost:3002/destination-calendars/12710174', { 
                'qs': {"apiKey":"do pariatur commodo voluptate dolor"},
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });
    
    });
    
    describe('tests for patch', function() {
        it('should respond 201 for "OK, destinationCalendar edited successfuly"', function() {
            var response = request('patch', 'http://localhost:3002/destination-calendars/48912428', { 
                'qs': {"apiKey":"ipsum"},
                'time': true
            });

            expect(response).to.have.status(201);
            return chakram.wait();
        });


        it('should respond 400 for "Bad request. DestinationCalendar body is invalid."', function() {
            var response = request('patch', 'http://localhost:3002/destination-calendars/-34275279', { 
                'qs': {"apiKey":"ad nulla magna officia"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('patch', 'http://localhost:3002/destination-calendars/-6359919', { 
                'qs': {"apiKey":"amet sit do"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });
    
    });
    
    describe('tests for delete', function() {
        it('should respond 201 for "OK, destinationCalendar removed successfuly"', function() {
            var response = request('delete', 'http://localhost:3002/destination-calendars/16132479', { 
                'qs': {"apiKey":"ex elit sit"},
                'time': true
            });

            expect(response).to.have.status(201);
            return chakram.wait();
        });


        it('should respond 400 for "Bad request. DestinationCalendar id is invalid."', function() {
            var response = request('delete', 'http://localhost:3002/destination-calendars/-72287651', { 
                'qs': {"apiKey":"sint"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('delete', 'http://localhost:3002/destination-calendars/42522033', { 
                'qs': {"apiKey":"proident"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });
    
    });
});