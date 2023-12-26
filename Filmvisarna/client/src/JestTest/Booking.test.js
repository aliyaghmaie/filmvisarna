const axios = require('axios');
describe('Booking API', () => {
    it('should book seats when a valid request is made', async () => {
        const bookingData = {
            id: '655b2ee7d4f0ebc0222160ba',
            rows: [{ row: 5 }],
            seats: [ 
                { seat: 3, seatNumber: 42 },
                { seat: 2, seatNumber: 43 },
            ],
            adult: 2,
            child: 0,
            senior: 0,
            email: 'apa@gmail.com',
            phone: 'Apaapa123',
        };

        try {
            const bookingResponse = await axios.post('http://localhost:5174/api/booking', bookingData);
            expect(bookingResponse.status).toBe(201); // Ensure booking creation is successful

            const screeningResponse = await axios.get(`http://localhost:5174/api/booking/${bookingData.id}`);
            const bookedSeats = screeningResponse.data.seats.filter((seat) => {
                return bookingData.seats.some((bookedSeat) => bookedSeat.seatNumber === seat.seatNumber);
            });

            expect(bookedSeats.length).toBe(bookingData.seats.length);
        } catch (error) {
            console.log(error)
        }
    });

    // Add more tests for edge cases, error scenarios, etc. npx jest
});
