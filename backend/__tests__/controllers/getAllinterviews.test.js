const Application = require('../../models/jobApplication');
const {
  getAllinterviews,
} = require('../../controllers/candidate/getAllinterviews');

// Mock the Job Application model
jest.mock('../../models/jobApplication', () => ({
  find: jest.fn(),
}));

afterEach(() => {
  jest.clearAllMocks();
});

const response = {
  status: jest.fn((x) => ({
    json: jest.fn((x) => x),
  })),
  json: jest.fn((x) => x),
  send: jest.fn((x) => x),
};

const request = {
  params: jest.fn((x) => x),
};

describe('getAllinterviews', () => {
  it('should return all interviews for a candidate', async () => {
    // Mock the find function to return a list of job applications
    const jobApplications = [
      {
        _id: '6420a1964e8ee54cf530f767',
        candidateId: '641d2207b47d92a84e53d649',
        jobPostId: '641fbd0f1c79826f993f9e4d',
        applicationStatus: ['interview'],
        authorId: '641fbcc71c79826f993f9e35',
      },
      {
        _id: '642633f638125bfae5ba8435',
        candidateId: '641d2207b47d92a84e53d649',
        jobPostId: '6426319d38125bfae5ba82b8',
        applicationStatus: ['interview'],
        authorId: '6426318938125bfae5ba82a1',
      },
    ];
    Application.find.mockResolvedValueOnce(jobApplications);

    await getAllinterviews(request, response);
    expect(response.status).toHaveBeenCalledWith(201);
  });

  it('should return a message if no interviews are found', async () => {
    Application.find.mockResolvedValueOnce([]);
    await getAllinterviews(request, response);
    expect(response.status).toHaveBeenCalledWith(200);
  });
});
