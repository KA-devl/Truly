const { updateJob } = require('../../controllers/employer/updateJob');
const jobPosting = require('../../models/jobPost');

jest.mock('../../models/jobPost');

afterEach(() => {
  jest.clearAllMocks();
});

const response = {
  status: jest.fn((x) => ({
    json: jest.fn((x) => x),
  })),
  json: jest.fn((x) => x),
};

const request = {
  params: jest.fn((x) => x),
};

it('should return a 201 the jo Posting is updated', async () => {
  jobPosting.findByIdAndUpdate.mockResolvedValueOnce([{ Jobtitle: 'test' }]);

  // Act
  await updateJob(request, response);

  // Assert
  expect(response.status).toHaveBeenCalledWith(201);
});

it('should return a 201 if no  job postings are found', async () => {
  jobPosting.findById.mockResolvedValueOnce([]);

  // Act
  await updateJob(request, response);

  // Assert
  expect(response.status).toHaveBeenCalledWith(400);
});
