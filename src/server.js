// This is a mock server to provide a response to my fetch requests

import { createServer, Model } from "miragejs";
createServer({
  models: {
    houses: Model,
  },
  seeds(server) {
    server.create("house", {
      address: "123 Spadina Ave.",
      postalCode: "ABC123",
      images: [
        "/images/house1.jpg",
        "/images/livingroom1.jpg",
        "/images/bed1.jpg",
      ],
      rooms: {
        numberOfBedrooms: 3,
        numberOfBathrooms: 2,
      },
      squarefootage: 1500,
      hasBackyard: false,
      hasParking: true,
    });
    server.create("house", {
      address: "54 Collingwood St.",
      postalCode: "CBA456",
      images: [
        "/images/house2.jpg",
        "/images/livingroom2.jpg",
        "/images/bed2.jpg",
      ],
      rooms: {
        numberOfBedrooms: 4,
        numberOfBathrooms: 2,
      },
      squarefootage: 2500,
      hasBackyard: true,
      hasParking: true,
    });
    server.create("house", {
      address: "214 King St.",
      postalCode: "ASD789",
      images: [
        "/images/house3.jpg",
        "/images/livingroom3.jpg",
        "/images/bed3.jpg",
      ],
      rooms: {
        numberOfBedrooms: 5,
        numberOfBathrooms: 3,
      },
      squarefootage: 5000,
      hasBackyard: false,
      hasParking: true,
    });
  },
  routes() {
    this.namespace = "api";

    this.get("/houses/:address/", (schema, request) => {
      let myAddress = request.params.address;
      let house = schema.houses.findBy({ address: myAddress });
      if (house) {
        return house;
      } else {
        return schema.houses.all();
      }
    });
  },
});
