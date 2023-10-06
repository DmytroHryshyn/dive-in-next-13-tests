'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /users/{userId}', function() {
    describe('tests for delete', function() {
        it('should respond 201 for "OK, user removed successfuly"', function() {
            var response = request('delete', 'http://localhost:3002/users/1', { 
                'qs': {"apiKey":"minim exercitation"},
                'time': true
            });

            expect(response).to.have.status(201);
            return chakram.wait();
        });


        it('should respond 400 for "Bad request. User id is invalid."', function() {
            var response = request('delete', 'http://localhost:3002/users/1', { 
                'qs': {"apiKey":"Lorem"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('delete', 'http://localhost:3002/users/1', { 
                'qs': {"apiKey":"in"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });
    
    });
    
    describe('tests for get', function() {
        it('should respond 200 for "OK"', function() {
            var response = request('get', 'http://localhost:3002/users/4', { 
                'qs': {"apiKey":"cupidatat laborum eu exercitation"},
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('get', 'http://localhost:3002/users/4', { 
                'qs': {"apiKey":"elit laboris nulla cupidatat ut"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });


        it('should respond 404 for "User was not found"', function() {
            var response = request('get', 'http://localhost:3002/users/4', { 
                'qs': {"apiKey":"reprehenderit exercitation"},
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });
    
    });
    
    describe('tests for patch', function() {
        it('should respond 200 for "OK, user edited successfuly"', function() {
            var response = request('patch', 'http://localhost:3002/users/4', { 
                'qs': {"apiKey":"sed anim dolor"},
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 400 for "Bad request. User body is invalid."', function() {
            var response = request('patch', 'http://localhost:3002/users/4', { 
                'qs': {"apiKey":"aliquip sed"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('patch', 'http://localhost:3002/users/4', { 
                'qs': {"apiKey":"magna nostrud qui"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });


        it('should respond 403 for "Insufficient permissions to access resource."', function() {
            var response = request('patch', 'http://localhost:3002/users/4', { 
                'qs': {"apiKey":"ut mollit dolore"},
                'time': true
            });

            expect(response).to.have.status(403);
            return chakram.wait();
        });
    
    });
});