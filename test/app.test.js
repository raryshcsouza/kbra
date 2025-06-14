import request from "supertest";
import { describe, expect, it } from "vitest";
import app from "../src/app";

describe("Person API", () => {
  it("should return the person with given id", async () => {
    const res = await request(app).get("/person/1");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: 1, firstName: "Mickey", lastName: "Mouse" });
  });

  it("should return 404 for non-existent person", async () => {
    const res = await request(app).get("/person/999");
    expect(res.status).toBe(404);
  });

  it("should filter persons by firstName", async () => {
    const res = await request(app)
      .post("/person/list")
      .send({ firstName: "Mickey" });

    expect(res.status).toBe(200);
    expect(res.body).toEqual([
      { id: 1, firstName: "Mickey", lastName: "Mouse" },
    ]);
  });

  it("should filter persons by lastName", async () => {
    const res = await request(app)
      .post("/person/list")
      .send({ lastName: "Duck" });

    expect(res.status).toBe(200);
    expect(res.body).toEqual([
      { id: 2, firstName: "Donald", lastName: "Duck" },
      { id: 4, firstName: "Daisy", lastName: "Duck" },
    ]);
  });

  it("shoud filter person with both, firstName and lastName", async () => {
    const res = await request(app)
      .post("/person/list")
      .send({ firstName: "Donald", lastName: "Duck" });

    expect(res.status).toBe(200);
    expect(res.body).toEqual([
      { id: 2, firstName: "Donald", lastName: "Duck" },
    ]);
  });

  it("should insert a new person", async () => {
    const newPerson = { id: 14, firstName: "Tony", lastName: "Stark" };
    const res = await request(app).post("/person").send(newPerson);

    expect(res.status).toBe(201);
    expect(res.body).toEqual(newPerson);

    const getRes = await request(app).get("/person/14");
    expect(getRes.status).toBe(200);
    expect(getRes.body).toEqual(newPerson);
  });
});
