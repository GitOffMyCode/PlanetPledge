const app = require("./server");
const supertest = require("supertest");

describe("test API", () => {
  test("returns status 200 when api called", () => {
        return supertest(app)
            .get("/pledges")
            .expect(200);
    })
})

describe("test API post endpoint", ()=>{
  test("returns status 201 when api called", () =>{
    return supertest(app)
    .post("/pledges")
    .send({"title":"shampoo bar",
    "detail":"buy shampoo bar, use it",
    "type":"C",
    "username":"HelenG"})
    .expect(201);
  })
})


