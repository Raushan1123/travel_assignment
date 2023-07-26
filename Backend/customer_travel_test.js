const request = require("supertest");

const { Travel } = require("./model/customer_travel_details");
const { app } = require(".");

describe("Travel Details Endpoints", () => {
  beforeAll(async () => {
    await Travel.deleteMany({});
  });

  describe("POST /travelinfo", () => {
    it("should add new travel data to the database", async () => {
      const res = await request(app)
        .post("/travelinfo")
        .send({
          Name: "Ravi",
          Email: "ravi@ravi.com",
          Phone: "8938736382",
          Destination: "Singapore",
          No_of_travellers: 2,
          Interests: "Adventure & Outdoors",
          Budget: 5000,
          Trip_Duration: 4,
          Trip_Date: "2023-08-26T12:00:00",
          Planning_Stage: "Still dreaming/researching",
        })
        .expect(201);

      expect(res.body).toHaveProperty("_id");
      expect(res.body.Name).toBe("Ravi");
      expect(res.body.Email).toBe("ravi@ravi.com");
      expect(res.body.Destination).toBe("Singapore");
      expect(res.body.No_of_travellers).toBe(2);
      expect(res.body.Budget).toBe(5000);
      expect(res.body.Phone).toBe("8938736382");
      expect(res.body.Interests).toBe("Adventure & Outdoors");
      expect(res.body.Trip_Duration).toBe(4);
      expect(res.body.Trip_Date).toBe("2023-08-26T12:00:00");
      expect(res.body.Planning_Stage).toBe("Still dreaming/researching");
    });
  });

  describe("GET /travelinfo", () => {
    beforeAll(async () => {
      await Travel.create({
        Name: "Ravi2",
        Email: "ravi2@ravi2.com",
        Destination: "Mumbai",
        No_of_travellers: 3,
        Budget: 1500,
        Phone: "8375837457",
        Interests: "Heritage & Culture",
        Trip_Duration: 3,
        Trip_Date: "2024-08-10T14:00:00",
        Planning_Stage: "Definitely traveling, need destination expertise"
      });
    });

    it("should get all travel details from the database", async () => {
      const res = await request(app).get("/travelinfo").expect(200);

      expect(res.body).toHaveLength(2);
      expect(res.body[1]).toHaveProperty("_id");
      expect(res.body.Name).toBe("Ravi2");
      expect(res.body.Email).toBe("ravi2@ravi2.com");
      expect(res.body.Destination).toBe("Mumbai");
      expect(res.body.No_of_travellers).toBe(3);
      expect(res.body.Budget).toBe(1500);
      expect(res.body.Phone).toBe("8375837457");
      expect(res.body.Interests).toBe("Heritage & Culture");
      expect(res.body.Trip_Duration).toBe(3);
      expect(res.body.Trip_Date).toBe("2024-08-10T14:00:00");
      expect(res.body.Planning_Stage).toBe("Definitely traveling, need destination expertise");
    });
  });
});