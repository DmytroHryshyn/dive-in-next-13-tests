'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /availabilities/{id}', function() {
    describe('tests for delete', function() {
        it('should respond 201 for "OK, availability removed successfully"', function() {
            var response = request('delete', 'http://localhost:3002/availabilities/15269473', { 
                'qs': {"apiKey":30641431},
                'time': true
            });

            expect(response).to.have.status(201);
            return chakram.wait();
        });


        it('should respond 400 for "Bad request. Availability id is invalid."', function() {
            var response = request('delete', 'http://localhost:3002/availabilities/90023060', { 
                'qs': {"apiKey":74737157},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('delete', 'http://localhost:3002/availabilities/80176230', { 
                'qs': {"apiKey":20544067},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });
    
    });
    
    describe('tests for get', function() {
        it('should respond 200 for "OK"', function() {
            var response = request('get', 'http://localhost:3002/availabilities/-77607575', { 
                'qs': {"apiKey":32592993},
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid"', function() {
            var response = request('get', 'http://localhost:3002/availabilities/-13314012', { 
                'qs': {"apiKey":62312938},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });


        it('should respond 404 for "Availability not found"', function() {
            var response = request('get', 'http://localhost:3002/availabilities/-25878287', { 
                'qs': {"apiKey":-39788035},
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });
    
    });
    
    describe('tests for patch', function() {
        it('should respond 201 for "OK, availability edited successfully"', function() {
            var response = request('patch', 'http://localhost:3002/availabilities/24630610', { 
                'qs': {"apiKey":-5530514},
                'time': true
            });

            expect(response).to.have.status(201);
            return chakram.wait();
        });


        it('should respond 400 for "Bad request. Availability body is invalid."', function() {
            var response = request('patch', 'http://localhost:3002/availabilities/-6590677', { 
                'qs': {"apiKey":-78292704},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('patch', 'http://localhost:3002/availabilities/51645175', { 
                'qs': {"apiKey":-86398137},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });
    
    });
});