'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /users', function() {
    describe('tests for get', function() {
        it('should respond 200 for "OK"', function() {
            var response = request('get', 'http://localhost:3002/v1/users', { 
                'qs': {"apiKey":"eu do nisi","email":["ZDuf1-ukBF9DeE@qNAXKCyLogKdqSIONW.fmy"]},
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('get', 'http://localhost:3002/v1/users', { 
                'qs': {"apiKey":"do exercitation aliquip","email":["nrhOqoSZuBC9UCW@EIHcWaaLhULHquxfiQjMAUiVrOjjFRLYO.rpd","QLob-VqIbCY@mPPpqwuYtMSmIVikIKaRiuhKxyRy.xpbt","rLXWAbzR9-f9@FcwVooXRBwBLYxuAV.dql","rOdOiUDlm-JLVW@rJsjOTGb.tcnu","SnpjKkpo@sTJozycDjGGIbcRnwplQ.wa"]},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });


        it('should respond 404 for "No users were found"', function() {
            var response = request('get', 'http://localhost:3002/v1/users', { 
                'qs': {"apiKey":"mollit","email":["3i5Xvt7Z@atMZYvbDlRngKf.cgdm","oXXIvtakTPlX@WprUbGDFYBjaNj.zxl","6N8-iGysOPO-E3Z@pQUMCji.vzut","lCts2IoZ@lSKHjfkXflGdFUiwgIErsMmFgfJgvILgl.oudk"]},
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });
    
    });
    
    describe('tests for post', function() {
        it('should respond 201 for "OK, user created"', function() {
            var response = request('post', 'http://localhost:3002/v1/users', { 
                'qs': {"apiKey":"eu"},
                'time': true
            });

            expect(response).to.have.status(201);
            return chakram.wait();
        });


        it('should respond 400 for "Bad request. user body is invalid."', function() {
            var response = request('post', 'http://localhost:3002/v1/users', { 
                'qs': {"apiKey":"Excepteur"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('post', 'http://localhost:3002/v1/users', { 
                'qs': {"apiKey":"mollit culpa adipisicing Duis amet"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });
    
    });
});