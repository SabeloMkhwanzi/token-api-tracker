const request = require("supertest");
const app = require("../src/app");

describe("API Endpoints", () => {
  it("should get totalSupply", async () => {
    const res = await request(app).get("/api/v1/totalSupply");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("totalSupply");
  });

  it("should get circulatingSupply", async () => {
    const res = await request(app).get("/api/v1/circulatingSupply");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("circulatingSupply");
  });

  it("should get marketCap", async () => {
    const res = await request(app).get("/api/v1/marketCap");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("marketCap");
  });

  it("should get FDV", async () => {
    const res = await request(app).get("/api/v1/fdv");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("fdv");
  });

  it("should get tokenPrice", async () => {
    const res = await request(app).get("/api/v1/tokenPrice");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("tokenPrice");
  });

  it("should get combined yourTokenData, totalSupply, circulatingSupply, marketCap, fdv, tokenPrice ", async () => {
    const res = await request(app).get("/api/v1/yourTokenData");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("totalSupply");
    expect(res.body).toHaveProperty("circulatingSupply");
    expect(res.body).toHaveProperty("marketCap");
    expect(res.body).toHaveProperty("fdv");
    expect(res.body).toHaveProperty("tokenPrice");
  });
});
