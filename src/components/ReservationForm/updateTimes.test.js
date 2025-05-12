import updateTimes from "./updateTimes"; 

it("should return a non-empty array of times from updateTimes", () => {
  
  const result = updateTimes(null, "2025-05-12");

  expect(Array.isArray(result)).toBe(true);  // Ensure it returns an array
  expect(result.length).toBeGreaterThan(0);  // Ensure the array is non-empty
});