'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /bookings/{id}/cancel', function() {
    describe('tests for delete', function() {
        it('should respond 200 for "OK, booking cancelled successfully"', function() {
            var response = request('delete', 'http://localhost:3002/bookings/98634979/cancel', { 
                'qs': {"apiKey":"sed aliquip anim nostrud","allRemainingBookings":true,"reason":"Ut enim dolor esse consectetur"},
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 400 for "Bad request  <table>    <tr>      <td>Message</td>      <td>Cause</td>    </tr>    <tr>      <td>Booking not found</td>      <td>The provided id didn\'t correspond to any existing booking.</td>    </tr>    <tr>      <td>Cannot cancel past events</td>      <td>The provided id matched an existing booking with a past startDate.</td>    </tr>    <tr>      <td>User not found</td>      <td>The userId did not matched an existing user.</td>    </tr>  </table> "', function() {
            var response = request('delete', 'http://localhost:3002/bookings/2702059/cancel', { 
                'qs': {"apiKey":"proident culpa quis","allRemainingBookings":true,"reason":"occaecat veniam cillum"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 404 for "User not found"', function() {
            var response = request('delete', 'http://localhost:3002/bookings/-14564926/cancel', { 
                'qs': {"apiKey":"adipisicing veniam pariatur dolor nostrud","allRemainingBookings":false,"reason":"elit et culpa ut"},
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });
    
    });
});