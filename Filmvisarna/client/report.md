---
## Testing Report: Filmvisarna Cinema Website - Booking and Cancellation Functionalities

### API Endpoints and Request Bodies

#### Booking API: `http://localhost:5173/api/booking`
- **Request Body:**
    ```json
    {
        "id": "655b2ee7d4f0ebc0222160ba",
        "rows": [
            {
                "row": 6
            }
        ],
        "seats": [
            {
                "seat": 3,
                "seatNumber": 42
            },
            {
                "seat": 2,
                "seatNumber": 43
            }
        ],
        "adult": 2,
        "child": 0,
        "senior": 0,
        "email": "apa@gmail.com",
        "phone": "Apaapa123"
    }
    ```

#### Cancellation API: `http://localhost:5173/api/bookings`
- **Request Body:**
    ```json
    {
        "id": "BoookingId"
    }
    ```

### Testing Summary

#### Exploratory Testing
During exploratory testing of the cinema ticket booking:
- The booking process exhibited user-friendly navigation.
- Seat selection, payment, and confirmation steps worked seamlessly.
- Minor inconsistencies in error handling were addressed.

#### Unit Testing with Jest
- **Tests Conducted:** The Jest suite extensively covered booking functionality, including seat selection, payment validation, and confirmation steps.
- **Test Coverage:** Comprehensive test coverage was achieved, encompassing various user scenarios.
- **Issues Identified:** No major issues detected; minor improvements were made in error handling.
- **Jest Challenges:** Initial challenges were encountered in mocking asynchronous functions and API calls, later resolved through experimentation.

#### Supplementary Testing with Cypress.io
- **Purpose:** Cypress.io was used for end-to-end testing to validate user flows holistically.
- **Insights:** The supplementary tests reinforced the robustness of the booking process and UI interactions.
- **Issues Found:** No critical issues; it validated the reliability of the application's functionality.

#### Source Code Understanding
- React components and code structure were well-organized and understandable.
- Comments and naming conventions enhanced code readability.

### Suggestions for Improvement
- **Additional Tests:** Consider endpoint testing to thoroughly validate API responses and error handling.
- **Coverage Enhancement:** Testing additional user scenarios and real-time error handling will improve overall coverage.
- **Testing Framework Consideration:** Exploring specialized frameworks for endpoint/API testing could further enhance the suite.

---

This report encapsulates the testing efforts, including Jest and Cypress.io, focusing on the booking and cancellation functionalities of the Filmvisarna Cinema website. It covers observations, challenges, and suggestions for enhancing the testing suite.