const request = require('supertest');
const server = require('../api/server');
const db = require('../database/connection');

describe('authentication endpoints', () => {
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

        it('should return message "user created"', () => {
            return request(server)
                    .post("/api/signup")
                    .send({
                        username: "kp3",
                        password: "letmein",
                        phoneNumber: "5555555554"
                    })
                    .then(res => {
                        expect(res.body.message).toBe("user created");
                    })
        })
    });
    
    describe('POST /login', () => {
        beforeEach(async () => {
            await db('users').truncate();
        });
        it('should return message "login successful', async () => {
            // first register a user
            await request(server)
                    .post("/api/signup")
                    .send({
                        username: "brandnewuser20",
                        password: "brandnewpassword20",
                        phoneNumber: "3213211239"
                    })
                    .then(res => {
                        expect(res.status).toBe(201);
                    })
            await request(server)
                    .post("/api/login")
                    .send({
                        username: "brandnewuser20",
                        password: "brandnewpassword20"
                    })
                    .then(res => {
                        expect(res.body.message).toBe("login successful")
                    })        
        });

        it('should return status code 200', async () => {
            // first register a user
            await request(server)
                    .post("/api/signup")
                    .send({
                        username: "helloitsme",
                        password: "letmein",
                        phoneNumber: "3213211235"
                    })
                    .then(res => {
                        expect(res.status).toBe(201);
                    })
            await request(server)
                    .post("/api/login")
                    .send({
                        username: "helloitsme",
                        password: "letmein"
                    })
                    .then(res => {
                        expect(res.status).toBe(200);
                    })        
        })      
    })
})