const {
  rejected,
} = require('../../controllers/employer/updateApplicationStatusToRejected');
const Application = require('../../models/jobApplication');

jest.mock('../../models/jobApplication');
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

describe('getApplication', () => {
  const mockApplication = {
    _id: '642a0ea6c0b5dfe68e1d2890',
    candidateId: '63eeaf101477a9f573ae6c12',
    jobPostId: '642662fbb00a9b98203c565c',
    applicationStatus: ['rejected'],
    creationDate: '2023-04-02T23:24:22.628Z',
    authorId: '642112c5953fb1356348965c',
  };
  it(' should Update a job Application Status of a candidate to Interview', async () => {
    Application.findByIdAndUpdate.mockResolvedValueOnce(mockApplication);

    // Act
    await rejected(request, response);

    // Assert
    expect(response.status).toHaveBeenCalledWith(201);
  });

  it('should return a code error 400 when invalid jobapplication is entenred', async () => {
    Application.findByIdAndUpdate.mockResolvedValueOnce([]);
    // Act
    await rejected(request, response);
    // Assert
    expect(response.status).toHaveBeenCalledWith(400);
  });
});
