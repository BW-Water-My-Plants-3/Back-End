const request = require("supertest");
const server = require("../api/server");
const db = require("../database/connection");

describe("plants endpoints", () => {
  beforeEach(async () => {
    await db("plants").truncate();
    await db("users").truncate();
    await request(server)
      .post("/api/signup")
      .send({
        username: "brandnewuser",
        password: "brandnewpassword",
        phoneNumber: "3213211234",
      })
      .then((res) => {
        expect(res.status).toBe(201);
      });
  });

  describe("POST /plants", () => {
    it("should return status 201 to show that plant was successfully created and added", async () => {
      let token;

      await request(server)
        .post("/api/login")
        .send({
          username: "brandnewuser",
          password: "brandnewpassword",
        })
        .then((res) => {
          token = res.body.token;
          console.log(token);
          expect(res.body.message).toBe("login successful");
        });

      await request(server)
        .post("/api/plants")
        .set("Authorization", token)
        .send({
          nickname: "planty plant",
          species: "planticos exoticos",
          h2oFrequency: "once a month",
          image: "",
        })
        .then((res) => {
          expect(res.status).toBe(201);
        });
    });
  });

  describe("GET /plants", () => {
    it("should return status 200 to show that the plants were successfully returned from db", async () => {
      let token;

      await request(server)
        .post("/api/login")
        .send({
          username: "brandnewuser",
          password: "brandnewpassword",
        })
        .then((res) => {
          token = res.body.token;
          console.log(token);
          expect(res.body.message).toBe("login successful");
        });

      await request(server)
        .post("/api/plants")
        .set("Authorization", token)
        .send({
          nickname: "planty plant",
          species: "planticos exoticos",
          h2oFrequency: "once a month",
          image: "",
        })
        .then((res) => {
          expect(res.status).toBe(201);
        });

        await request(server)
        .post("/api/plants")
        .set("Authorization", token)
        .send({
          nickname: "planty",
          species: "exoticos",
          h2oFrequency: "once a month",
          image: "",
        })
        .then((res) => {
          expect(res.status).toBe(201);
        });

      await request(server)
        .get("/api/plants")
        .set("Authorization", token)
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });
  });
});
