
const request = require('supertest')
const app = require('../src/app.js')

test("It should respond with json data for current weather for LA ", async () => {
    const response = await request(app).get("/getAPIResponse")
    expect(response.statusCode).toBe(200);
    expect(response.body.currently.summary).toBe("Clear");
    expect(response.body.latitude).toBe(37.8267);
  });


test("It should respond with an array of students", async () => {
      const response = await request(app).get("/help");
      expect(response.statusCode).toBe(200);
});
