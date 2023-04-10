const Jobposting = require('../../models/jobPost');
const { deleteJobPosting } = require('../../controllers/employer/deleteJob');

jest.mock('../../models/jobPost');

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

afterEach(() => {
  jest.clearAllMocks();
});

describe('deleteJob', () => {
  const job = {
    _id: '641fbd0f1c79826f993f9e4d',
    name: 'Full stack web dev (Desjardins)',
    authorId: '641fbcc71c79826f993f9e35',
    description: 'Come join us in our dynamic team!',
    jobStatus: ['contractual'],
    is_faulfilled: false,
  };

  // it('should delete a job successfully with code 201', async () => {
  //   Jobposting.findById.mockResolvedValueOnce(job);
  //   Jobposting.remove.mockResolvedValueOnce(job);

  //   await deleteJobPosting(request, response);

  //   expect(response.status).toHaveBeenCalledWith(201);
  // });

  it('should return an error if the job  is not found', async () => {
    Jobposting.findById.mockResolvedValueOnce([]);
    Jobposting.remove.mockResolvedValueOnce(job);
    await deleteJobPosting(request, response);

    expect(response.status).toHaveBeenCalledWith(400);
  });
});
