export function fetchHouses(address = "string") {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          data: [
            {
              address: "123 Spadina Ave.",
              postalCode: "ABC123",
              url: "../../images/image1.png",
              rooms: {
                numberOfBedrooms: 3,
                numberOfBathrooms: 2,
              },
              squarefootage: 1500,
              hasBackyard: false,
              hasParking: true,
            },
            {
              address: "123 Spadina Ave.",
              postalCode: "ABC123",
              url: "../../images/image1.png",
              rooms: {
                numberOfBedrooms: 3,
                numberOfBathrooms: 2,
              },
              squarefootage: 1500,
              hasBackyard: false,
              hasParking: true,
            },
            {
              address: "123 Spadina Ave.",
              postalCode: "ABC123",
              url: "../../images/image1.png",
              rooms: {
                numberOfBedrooms: 3,
                numberOfBathrooms: 2,
              },
              squarefootage: 1500,
              hasBackyard: false,
              hasParking: true,
            },
          ],
        }),
      500
    )
  );
}
