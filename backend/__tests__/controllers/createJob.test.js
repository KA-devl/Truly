const JobPost = require('../../models/jobPost');
const { createJobPosting } = require('../../controllers/employer/createJob');

jest.mock('../../models/jobPost');

// Define request and response objects for testing
const request = {
  body: {
    name: 'Full stack web dev (Desjardins)',
    authorId: '641fbcc71c79826f993f9e35',
    description: 'Come join us in our dynamic team!',
    jobStatus: ['contractual'],
    is_faulfilled: false,
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

describe('createApplication', () => {
  it('should create a new job posting and return a 201 status code', async () => {
    JobPost.create.mockResolvedValueOnce(request.body);

    await createJobPosting(request, response);

    expect(JobPost.create).toHaveBeenCalledWith(request.body);
    expect(response.status).toHaveBeenCalledWith(201);
  });

  it('should return a 400  for any other error', async () => {
    const errorMessage = 'job name is  required';
    JobPost.create.mockRejectedValueOnce(new Error(errorMessage));

    await createJobPosting(request, response);

    expect(response.status).toHaveBeenCalledWith(400);
  });
});
