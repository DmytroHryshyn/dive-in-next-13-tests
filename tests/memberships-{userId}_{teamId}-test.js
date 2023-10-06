'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /memberships/{userId}_{teamId}', function() {
    describe('tests for delete', function() {
        it('should respond 201 for "OK, membership removed successfuly"', function() {
            var response = request('delete', 'http://localhost:3002/v1/memberships/-57116622_-30628698', { 
                'time': true
            });

            expect(response).to.have.status(201);
            return chakram.wait();
        });


        it('should respond 400 for "Bad request. Membership id is invalid."', function() {
            var response = request('delete', 'http://localhost:3002/v1/memberships/-6674764_88162467', { 
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('delete', 'http://localhost:3002/v1/memberships/25870685_-15906162', { 
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });
    
    });
    
    describe('tests for get', function() {
        it('should respond 200 for "OK"', function() {
            var response = request('get', 'http://localhost:3002/v1/memberships/30484639_-55193449', { 
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('get', 'http://localhost:3002/v1/memberships/33957534_14521051', { 
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });


        it('should respond 404 for "Membership was not found"', function() {
            var response = request('get', 'http://localhost:3002/v1/memberships/52674079_70817603', { 
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });
    
    });
    
    describe('tests for patch', function() {
        it('should respond 201 for "OK, membership edited successfully"', function() {
            var response = request('patch', 'http://localhost:3002/v1/memberships/44044653_45191237', { 
                'time': true
            });

            expect(response).to.have.status(201);
            return chakram.wait();
        });


        it('should respond 400 for "Bad request. Membership body is invalid."', function() {
            var response = request('patch', 'http://localhost:3002/v1/memberships/-55667824_-55694682', { 
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('patch', 'http://localhost:3002/v1/memberships/11118187_-11404188', { 
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });
    
    });
});