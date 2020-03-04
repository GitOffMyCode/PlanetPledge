const app = require("./server.js");
const supertest=require("supertest");

describe("test API",()=>{
    test("returns status 200 when api called",()=>{
        supertest(app)
        .get("/pledge")
        .expect(200);
    })
})
