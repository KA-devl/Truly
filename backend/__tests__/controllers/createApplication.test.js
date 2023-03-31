const mongoose = require('mongoose');
const Application = require('../../models/jobApplication');
const {
  createApplication,
} = require('../../controllers/candidate/createApplication');

jest.mock('../../models/jobApplication');

// Define request and response objects for testing
const request = {
  body: {
    candidateId: '616aa07d9cbef6047f10c537',
    jobPostId: '616aa3d09cbef6047f10c541',
  },
};

const response = {
  status: jest.fn((x) => ({
    json: jest.fn(),
  })),
};

// Set up cleanup functions for testing
afterEach(() => {
  jest.clearAllMocks();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('createApplication', () => {
  it('should create a new application and return a 201 status code', async () => {
    Application.create.mockResolvedValueOnce(request.body);
    Application.populate.mockResolvedValueOnce({
      data: request.body,
    });

    await createApplication(request, response);

    expect(Application.create).toHaveBeenCalledWith(request.body);
    expect(Application.populate).toHaveBeenCalledTimes(1);
    expect(response.status).toHaveBeenCalledWith(201);
  });

  it('should return a 400 error for missing required fields', async () => {
    const errorMessage = 'Candidate ID is required';
    Application.create.mockRejectedValueOnce(new Error(errorMessage));

    await createApplication(request, response);

    expect(response.status).toHaveBeenCalledWith(400);
  });
});
