'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /selected-calendars/{userId}_{integration}_{externalId}', function() {
    describe('tests for delete', function() {
        it('should respond 201 for "OK, selected-calendar removed successfully"', function() {
            var response = request('delete', 'http://localhost:3002/selected-calendars/62157637_nonvoluptateesseipsum_72094694', { 
                'qs': {"apiKey":"do"},
                'time': true
            });

            expect(response).to.have.status(201);
            return chakram.wait();
        });


        it('should respond 400 for "Bad request. SelectedCalendar id is invalid."', function() {
            var response = request('delete', 'http://localhost:3002/selected-calendars/28749670_quicupidatatdolore_-99201541', { 
                'qs': {"apiKey":"occaecat"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('delete', 'http://localhost:3002/selected-calendars/-27916719_ea_17091373', { 
                'qs': {"apiKey":"proident est dolor irure"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });
    
    });
    
    describe('tests for get', function() {
        it('should respond 200 for "OK"', function() {
            var response = request('get', 'http://localhost:3002/selected-calendars/20537761_amet_quiipsumautemagna', { 
                'qs': {"apiKey":"esse aliquip enim labore"},
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('get', 'http://localhost:3002/selected-calendars/88366284_enimsitdoincididuntdolor_velitsuntvoluptatein', { 
                'qs': {"apiKey":"aute aliqua elit laboris"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });


        it('should respond 404 for "SelectedCalendar was not found"', function() {
            var response = request('get', 'http://localhost:3002/selected-calendars/-5036147_Excepteursintenimconsequatdolor_ut', { 
                'qs': {"apiKey":"sint elit do"},
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });
    
    });
    
    describe('tests for patch', function() {
        it('should respond 201 for "OK, selected-calendar edited successfully"', function() {
            var response = request('patch', 'http://localhost:3002/selected-calendars/-22981820_officiautquiexercitationaute_laboredolorvelitesse', { 
                'qs': {"apiKey":"dolor voluptate culpa eu"},
                'time': true
            });

            expect(response).to.have.status(201);
            return chakram.wait();
        });


        it('should respond 400 for "Bad request. SelectedCalendar body is invalid."', function() {
            var response = request('patch', 'http://localhost:3002/selected-calendars/43540223_reprehenderitexercitation_ut', { 
                'qs': {"apiKey":"exercitation sint"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('patch', 'http://localhost:3002/selected-calendars/-97505243_incupidatatcillumminim_aliquipconsectetur', { 
                'qs': {"apiKey":"ad minim nostrud ea"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });
    
    });
});