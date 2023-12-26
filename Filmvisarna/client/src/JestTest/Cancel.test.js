const axios = require('axios');

describe('Cancel Booking API', () => {
    it('should cancel a booking when a valid request is made', async () => {
        const bookingId = 'your_booking_id_here'; 

        try {
            // Make the cancellation request
            const cancelResponse = await axios.patch(`http://localhost:5174/api/bookings`, { id: bookingId });
            expect(cancelResponse.status).toBe(202); // Ensure cancellation is successful

            // Optionally, fetch the cancelled booking to verify its status
            const cancelledBookingResponse = await axios.get(`http://localhost:5174/api/bookings/${bookingId}`);
            const cancelledBooking = cancelledBookingResponse.data;

            expect(cancelledBooking.status).toBe(false); // Check the status of the cancelled booking
        } catch (error) {
            console.log(error);
        }
    });
});
