const supertest = require('supertest');
const { app, server } = require('../../app');
const Application = require('../../models/jobApplication');
const mongoose = require('mongoose');

// Mock the Job Application model
jest.mock('../../models/jobApplication', () => ({
  find: jest.fn(),
}));

afterEach(() => {
  jest.clearAllMocks();
});

afterAll(async () => {
  await server.close();
});

afterAll(async () => {
  await mongoose.connection.close();
});
describe('getAllinterviews', () => {
  it('should return all interviews for a candidate', async () => {
    // Mock the find function to return a list of job applications
    const jobApplications = [
      { jobTitle: 'Software Engineer' },
      { jobTitle: 'Web Developer' },
    ];
    Application.find.mockResolvedValue(jobApplications);

    // Make a GET request to the controller
    const response = await supertest(app).get('/api/get-all-interviews/123');

    // Assertions
    expect(Application.find).toHaveBeenCalledWith({
      candidateId: '123',
      applicationStatus: ['interview'],
    });
    expect(response.statusCode).toBe(201);
  });

  it('should return an error message if no interviews are found', async () => {
    // Mock the find function to return an empty array
    Application.find.mockResolvedValue([]);

    // Make a GET request to the controller
    const response = await supertest(app).get('/api/get-all-interviews/123');

    // Assertions
    expect(Application.find).toHaveBeenCalledWith({
      candidateId: '123',
      applicationStatus: ['interview'],
    });
    expect(response.statusCode).toBe(200);
  });

  it('should return an error message if an error occurs', async () => {
    // Mock the find function to throw an error
    const errorMessage = 'Internal server error';
    Application.find.mockRejectedValue(new Error(errorMessage));

    // Make a GET request to the controller
    const response = await supertest(app).get('/api/get-all-interviews/123');

    // Assertions
    expect(Application.find).toHaveBeenCalledWith({
      candidateId: '123',
      applicationStatus: ['interview'],
    });
    expect(response.statusCode).toBe(400);
  });
});
