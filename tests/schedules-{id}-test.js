'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /schedules/{id}', function() {
    describe('tests for delete', function() {
        it('should respond 201 for "OK, schedule removed successfully"', function() {
            var response = request('delete', 'http://localhost:3002/schedules/-4812766', { 
                'qs': {"apiKey":"labore"},
                'time': true
            });

            expect(response).to.have.status(201);
            return chakram.wait();
        });


        it('should respond 400 for "Bad request. Schedule id is invalid."', function() {
            var response = request('delete', 'http://localhost:3002/schedules/76161254', { 
                'qs': {"apiKey":"consectetur velit enim in"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('delete', 'http://localhost:3002/schedules/65868175', { 
                'qs': {"apiKey":"commodo est in Lorem"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });
    
    });
    
    describe('tests for get', function() {
        it('should respond 200 for "OK"', function() {
            var response = request('get', 'http://localhost:3002/schedules/-96332587', { 
                'qs': {"apiKey":"dolore incididunt exercitation nulla"},
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('get', 'http://localhost:3002/schedules/-3301343', { 
                'qs': {"apiKey":"Ut"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });


        it('should respond 404 for "Schedule was not found"', function() {
            var response = request('get', 'http://localhost:3002/schedules/-88086804', { 
                'qs': {"apiKey":"aliqua dolore aliquip irure"},
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });
    
    });
    
    describe('tests for patch', function() {
        it('should respond 200 for "OK, schedule edited successfully"', function() {
            var response = request('patch', 'http://localhost:3002/schedules/72451761', { 
                'qs': {"apiKey":"in consequat eiusmod in"},
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 400 for "Bad request. Schedule body is invalid."', function() {
            var response = request('patch', 'http://localhost:3002/schedules/-69654216', { 
                'qs': {"apiKey":"quis eiusmod in"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('patch', 'http://localhost:3002/schedules/-41391832', { 
                'qs': {"apiKey":"exercitation"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });
    
    });
});