import initializeTimes from "./initializeTimes"; 

it("should return a non-empty array of times from initializeTimes", () => {
  
  const result = initializeTimes();

  expect(Array.isArray(result)).toBe(true);  // Ensure it returns an array
  expect(result.length).toBeGreaterThan(0);  // Ensure the array is non-empty
});