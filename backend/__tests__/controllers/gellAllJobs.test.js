const supertest = require('supertest');
const { app, server } = require('../../app');
const jobPosting = require('../../models/jobPost');
const mongoose = require('mongoose');

jest.mock('../../models/jobPost', () => ({
  find: jest.fn(),
}));

afterEach(() => {
  jest.clearAllMocks();
});

afterAll(async () => {
  await server.close();
  await mongoose.connection.close();
});

describe('getAllJobs', () => {
  it('should return a 400 job postings are found', async () => {
    // Arrange
    jobPosting.find.mockResolvedValue([]);

    // Act
    const response = await supertest(app).get('/api/get-jobs');

    // Assert

    expect(response.statusCode).toBe(400);
  });
});
