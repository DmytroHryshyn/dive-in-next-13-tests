'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /teams/{teamId}', function() {
    describe('tests for delete', function() {
        it('should respond 201 for "OK, team removed successfully"', function() {
            var response = request('delete', 'http://localhost:3002/teams/82657579', { 
                'qs': {"apiKey":"elit"},
                'time': true
            });

            expect(response).to.have.status(201);
            return chakram.wait();
        });


        it('should respond 400 for "Bad request. Team id is invalid."', function() {
            var response = request('delete', 'http://localhost:3002/teams/-66208375', { 
                'qs': {"apiKey":"do mollit cillum labore"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('delete', 'http://localhost:3002/teams/-98874946', { 
                'qs': {"apiKey":"sunt ipsum Duis laborum"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });
    
    });
    
    describe('tests for get', function() {
        it('should respond 200 for "OK"', function() {
            var response = request('get', 'http://localhost:3002/teams/-7428069', { 
                'qs': {"apiKey":"esse nulla ea dolore"},
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('get', 'http://localhost:3002/teams/42387610', { 
                'qs': {"apiKey":"amet mollit Duis aute officia"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });


        it('should respond 404 for "Team was not found"', function() {
            var response = request('get', 'http://localhost:3002/teams/50652668', { 
                'qs': {"apiKey":"in"},
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });
    
    });
    
    describe('tests for patch', function() {
        it('should respond 201 for "OK, team edited successfully"', function() {
            var response = request('patch', 'http://localhost:3002/teams/76634588', { 
                'qs': {"apiKey":"est esse"},
                'time': true
            });

            expect(response).to.have.status(201);
            return chakram.wait();
        });


        it('should respond 400 for "Bad request. Team body is invalid."', function() {
            var response = request('patch', 'http://localhost:3002/teams/3542945', { 
                'qs': {"apiKey":"incididunt"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('patch', 'http://localhost:3002/teams/-70786545', { 
                'qs': {"apiKey":"irure Duis adipisicing"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });
    
    });
});