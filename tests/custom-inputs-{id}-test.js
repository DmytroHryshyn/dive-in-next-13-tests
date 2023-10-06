'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /custom-inputs/{id}', function() {
    describe('tests for delete', function() {
        it('should respond 201 for "OK, eventTypeCustomInput removed successfully"', function() {
            var response = request('delete', 'http://localhost:3002/custom-inputs/-64011271', { 
                'qs': {"apiKey":"tempor"},
                'time': true
            });

            expect(response).to.have.status(201);
            return chakram.wait();
        });


        it('should respond 400 for "Bad request. EventType id is invalid."', function() {
            var response = request('delete', 'http://localhost:3002/custom-inputs/-64193475', { 
                'qs': {"apiKey":"in ipsum"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('delete', 'http://localhost:3002/custom-inputs/-42692623', { 
                'qs': {"apiKey":"sunt"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });
    
    });
    
    describe('tests for get', function() {
        it('should respond 200 for "OK"', function() {
            var response = request('get', 'http://localhost:3002/custom-inputs/-57848357', { 
                'qs': {"apiKey":"dolor ex Ut fugiat pariatur"},
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('get', 'http://localhost:3002/custom-inputs/20135800', { 
                'qs': {"apiKey":"adipisicing"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });


        it('should respond 404 for "EventType was not found"', function() {
            var response = request('get', 'http://localhost:3002/custom-inputs/71857725', { 
                'qs': {"apiKey":"exercitation"},
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });
    
    });
    
    describe('tests for patch', function() {
        it('should respond 201 for "OK, eventTypeCustomInput edited successfully"', function() {
            var response = request('patch', 'http://localhost:3002/custom-inputs/-77925957', { 
                'qs': {"apiKey":"cupidatat"},
                'time': true
            });

            expect(response).to.have.status(201);
            return chakram.wait();
        });


        it('should respond 400 for "Bad request. EventType body is invalid."', function() {
            var response = request('patch', 'http://localhost:3002/custom-inputs/89193294', { 
                'qs': {"apiKey":"ut"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('patch', 'http://localhost:3002/custom-inputs/17947237', { 
                'qs': {"apiKey":"et veniam ex elit enim"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });
    
    });
});