// service.test.js
import axios from "axios";
import { getUserData } from "./service"; // Path to your service.js file

jest.mock("axios"); // Mock axios

describe("getUserData", () => {
  it("should fetch user data correctly", async () => {
    const mockUserData = { id: 1, name: "John Doe" };
    axios.get.mockResolvedValue({ data: mockUserData }); // Mock successful response

    const userId = 1;
    const userData = await getUserData(userId);

    expect(axios.get).toHaveBeenCalledWith(`/users/${userId}`); // Check if axios.get was called with correct URL
    expect(userData).toEqual(mockUserData); // Check if the returned data is correct
  });

  it("should handle errors gracefully", async () => {
    const errorMessage = "Network Error";
    axios.get.mockRejectedValue(new Error(errorMessage)); // Mock error response

    const userId = 1;
    try {
      await getUserData(userId);
    } catch (error) {
      expect(error.message).toBe(errorMessage); // Check if the error is caught and the message is correct
    }
  });

  it("should handle different user IDs", async () => {
    const mockUserData1 = { id: 1, name: "John Doe" };
    const mockUserData2 = { id: 2, name: "Jane Doe" };
    axios.get
      .mockResolvedValueOnce({ data: mockUserData1 })
      .mockResolvedValueOnce({ data: mockUserData2 });

    const userData1 = await getUserData(1);
    const userData2 = await getUserData(2);

    expect(userData1).toEqual(mockUserData1);
    expect(userData2).toEqual(mockUserData2);
  });

  it("should handle empty responses", async () => {
    axios.get.mockResolvedValue({}); // Mock empty response

    const userId = 1;
    const userData = await getUserData(userId);

    expect(userData).toEqual({}); // Expect an empty object to be returned
  });
});
