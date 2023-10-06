'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /bookings', function() {
    describe('tests for get', function() {
        it('should respond 200 for "OK"', function() {
            var response = request('get', 'http://localhost:3002/v1/bookings', { 
                'qs': {"apiKey":"123456789abcdefgh","userId":[75937609],"attendeeEmail":["1rIcgvgrIUmdRP@DeZrviZY.nd","FXFviS5H420uJb@okjVBTceirYXcFReixdnyjohFkTnRyk.cx","zmWvV5Foo7reeH@hXQdpAZAOfoI.uzz","Wg0nzzNBjbhHW9o@iHztMEVqpcDsgxLORcnZCjxsPkWwcIa.xaw","6m-GHOhSLYXABw@eAfOwjSFKmhUtgtA.nqjo"]},
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('get', 'http://localhost:3002/v1/bookings', { 
                'qs': {"apiKey":"123456789abcdefgh","userId":69772984,"attendeeEmail":"uWzPrZtf@QiWbgC.lmsc"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });


        it('should respond 404 for "No bookings were found"', function() {
            var response = request('get', 'http://localhost:3002/v1/bookings', { 
                'qs': {"apiKey":"123456789abcdefgh","userId":[43393950,75096564,-52708616],"attendeeEmail":["tm3WZ5Pd1Glwp@ngj.oh","BV44@EnhYgYTQYWOMXfbAs.kxbz"]},
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });
    
    });
    
    describe('tests for post', function() {
        it('should respond 200 for "Booking(s) created successfully."', function() {
            var response = request('post', 'http://localhost:3002/v1/bookings', { 
                'qs': {"apiKey":"voluptate tempor ad"},
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 400 for "Bad request <table>   <tr>     <td>Message</td>     <td>Cause</td>   </tr>   <tr>     <td>Booking body is invalid</td>     <td>Missing property on booking entity.</td>   </tr>   <tr>     <td>Invalid eventTypeId</td>     <td>The provided eventTypeId does not exist.</td>   </tr>   <tr>     <td>Missing recurringCount</td>     <td>The eventType is recurring, and no recurringCount was passed.</td>   </tr>   <tr>     <td>Invalid recurringCount</td>     <td>The provided recurringCount is greater than the eventType recurring config</td>   </tr> </table> "', function() {
            var response = request('post', 'http://localhost:3002/v1/bookings', { 
                'qs': {"apiKey":"in labore cupidatat minim ad"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 401 for "Authorization information is missing or invalid."', function() {
            var response = request('post', 'http://localhost:3002/v1/bookings', { 
                'qs': {"apiKey":"ut"},
                'time': true
            });

            expect(response).to.have.status(401);
            return chakram.wait();
        });
    
    });
});