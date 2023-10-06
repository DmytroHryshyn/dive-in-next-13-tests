'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /teams/{teamId}/availability', function() {
    describe('tests for get', function() {
        it('should respond 200 for "OK"', function() {
            var response = request('get', 'http://localhost:3002/teams/123/availability', { 
                'qs': {"apiKey":"1234abcd5678efgh","dateFrom":"2023-05-14 00:00:00","dateTo":"2023-05-20 00:00:00","eventTypeId":123},
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('get', 'http://localhost:3002/teams/123/availability', { 
                'qs': {"apiKey":"1234abcd5678efgh","dateFrom":"2023-05-14 00:00:00","dateTo":"2023-05-20 00:00:00","eventTypeId":123},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });


        it('should respond 404 for "Team not found | Team has no members"', function() {
            var response = request('get', 'http://localhost:3002/teams/123/availability', { 
                'qs': {"apiKey":"1234abcd5678efgh","dateFrom":"2023-05-14 00:00:00","dateTo":"2023-05-20 00:00:00","eventTypeId":123},
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });
    
    });
});