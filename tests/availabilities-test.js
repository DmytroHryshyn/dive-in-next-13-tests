'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /availabilities', function() {
    describe('tests for post', function() {
        it('should respond 201 for "OK, availability created"', function() {
            var response = request('post', 'http://localhost:3002/v1/availabilities', { 
                'qs': {"apiKey":"adipisicing elit tempor velit"},
                'time': true
            });

            expect(response).to.have.status(201);
            return chakram.wait();
        });


        it('should respond 400 for "Bad request. Availability body is invalid."', function() {
            var response = request('post', 'http://localhost:3002/v1/availabilities', { 
                'qs': {"apiKey":"nulla sint irure"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('post', 'http://localhost:3002/v1/availabilities', { 
                'qs': {"apiKey":"sed veniam aliquip"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });
    
    });
});