const app = require("./server");
const supertest = require("supertest");

describe("api", () => {

  test("returns status 200 when api called", () => {
    return supertest(app)
      .get("/pledges")
      .expect('Content-Type', /json/)
      .expect(200)
  })

  test("returns status 200 when api called to get a pledge by pledge_id", () => {
    const pledge_id_2 = [{
      pledge_title: 'cycle to work',
      pledge_detail: 'instead of driving to save planet',
      pledge_type: 'D',
      pledge_id: 2,
      username: 'HelenG'
    }]
    return supertest(app)
      .get("/pledges/2")
      .expect('Content-Type', /json/)
      .expect(200)
      .then(res => {
        // console.log(res.body)
        expect(res.body).toStrictEqual(pledge_id_2)
      });
  })

  test("deletes a pledge when passed pledge_id as a parameter", () => {
    return supertest(app)
      .delete("/pledges/8")
      // .expect('user deleted')
      .expect(200)
  })

  test("returns status 201 when api called", () =>{
    return supertest(app)
    .post("/pledges")
    .send({"pledge_title":"shampoo bar",
    "pledge_detail":"buy shampoo bar, use it",
    "pledge_type":"C",
    "username":"HelenG"})
    .expect(201);
  })

  test("returns status 201 when pledge udated", () => {   
    return supertest(app)
      .post("/pledges/2")
      .send({
        "pledge_status": true,
        "pledge_date": "'2020-01-22 19:10:25-07'"
      })
      .expect(201)
  })

})


