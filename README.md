# timestamp-microservice

The goal of this project was to create a backend application using Express.js that will serve a JSON object when a date (unix timestamp or a natural language string) is passed to the service. The JSON object will contain both a unix and natural language timestamp.

### User Story Requirements:
1. I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).
2. If it does, it returns both the Unix timestamp and the natural language form of that date.
3. If it does not contain a date or Unix timestamp, it returns null for those properties.