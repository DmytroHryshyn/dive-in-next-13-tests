'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /schedules', function() {
    describe('tests for get', function() {
        it('should respond 200 for "OK"', function() {
            var response = request('get', 'http://localhost:3002/v1/schedules', { 
                'qs': {"apiKey":"reprehenderit veniam do sint"},
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('get', 'http://localhost:3002/v1/schedules', { 
                'qs': {"apiKey":"aliqua enim nostrud"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });


        it('should respond 404 for "No schedules were found"', function() {
            var response = request('get', 'http://localhost:3002/v1/schedules', { 
                'qs': {"apiKey":"aliqua cupidatat"},
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });
    
    });
    
    describe('tests for post', function() {
        it('should respond 200 for "OK, schedule created"', function() {
            var response = request('post', 'http://localhost:3002/v1/schedules', { 
                'qs': {"apiKey":"sed laborum amet adipisicing"},
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 400 for "Bad request. Schedule body is invalid."', function() {
            var response = request('post', 'http://localhost:3002/v1/schedules', { 
                'qs': {"apiKey":"incididunt ut nisi anim"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('post', 'http://localhost:3002/v1/schedules', { 
                'qs': {"apiKey":"dolore"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });
    
    });
});