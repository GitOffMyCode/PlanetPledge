const app = require("./server");
const supertest = require("supertest");

describe("test API", () => {
  test("returns status 200 when api called", () => {
        return supertest(app)
            .get("/pledges")
            .expect(200);
    })
})


