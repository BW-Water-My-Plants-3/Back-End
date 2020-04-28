const request = require('supertest');
const server = require('../api/server');
const db = require('../database/connection');

describe('authentication', () => {
    describe('POST /signup', () => {
        beforeEach(async () => {
            await db('users').truncate();
        });
        it('should return status 201', () => {
            return request(server)
                    .post("/api/signup")
                    .send({
                        username: "kp3",
                        password: "letmein",
                        phoneNumber: "5555555554"
                    })
                    .then(res => {
                        expect(res.status).toBe(201);
                    })
        });

        it('should return message "sign up successful"', () => {
            return request(server)
                    .post("/api/signup")
                    .send({
                        username: "kp3",
                        password: "letmein",
                        phoneNumber: "5555555554"
                    })
                    .then(res => {
                        expect(res.body.message).toBe("sign up successful");
                    })
        })
    });    
})