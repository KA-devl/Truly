const { getJobs } = require('../../controllers/employer/getJobs');
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

it('should return a 201  if job postings are found', async () => {
  jobPosting.find.mockResolvedValueOnce([{ Jobtitle: 'test' }]);

  // Act
  await getJobs(request, response);

  // Assert
  expect(response.status).toHaveBeenCalledWith(201);
});

it('should return a 201 if no  job postings are found', async () => {
  jobPosting.find.mockResolvedValueOnce([]);

  // Act
  await getJobs(request, response);

  // Assert
  expect(response.status).toHaveBeenCalledWith(201);
});
