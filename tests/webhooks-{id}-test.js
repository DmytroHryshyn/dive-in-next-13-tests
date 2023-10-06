'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /webhooks/{id}', function() {
    describe('tests for delete', function() {
        it('should respond 201 for "OK, hook removed successfully"', function() {
            var response = request('delete', 'http://localhost:3002/v1/webhooks/37910008', { 
                'qs': {"apiKey":"velit id enim irure in"},
                'time': true
            });

            expect(response).to.have.status(201);
            return chakram.wait();
        });


        it('should respond 400 for "Bad request. hook id is invalid."', function() {
            var response = request('delete', 'http://localhost:3002/v1/webhooks/-32898642', { 
                'qs': {"apiKey":"sed laborum culpa"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('delete', 'http://localhost:3002/v1/webhooks/24283263', { 
                'qs': {"apiKey":"ea proident nostrud labore"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });
    
    });
    
    describe('tests for get', function() {
        it('should respond 200 for "OK"', function() {
            var response = request('get', 'http://localhost:3002/v1/webhooks/-41454448', { 
                'qs': {"apiKey":"deserunt"},
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('get', 'http://localhost:3002/v1/webhooks/-24184138', { 
                'qs': {"apiKey":"et id ullamco"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });


        it('should respond 404 for "Webhook was not found"', function() {
            var response = request('get', 'http://localhost:3002/v1/webhooks/15611798', { 
                'qs': {"apiKey":"ut sit incididunt anim"},
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });
    
    });
    
    describe('tests for patch', function() {
        it('should respond 201 for "OK, webhook edited successfully"', function() {
            var response = request('patch', 'http://localhost:3002/v1/webhooks/77310595', { 
                'qs': {"apiKey":"culpa ea officia reprehenderit"},
                'time': true
            });

            expect(response).to.have.status(201);
            return chakram.wait();
        });


        it('should respond 400 for "Bad request. Webhook body is invalid."', function() {
            var response = request('patch', 'http://localhost:3002/v1/webhooks/-30291480', { 
                'qs': {"apiKey":"eu sit"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('patch', 'http://localhost:3002/v1/webhooks/59257211', { 
                'qs': {"apiKey":"sed sit"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });
    
    });
});