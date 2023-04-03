const {
  getApplicationJob,
} = require('../../controllers/employer/getApplicationForAJob');
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
  it('should return a list of Applications with code 201', async () => {
    Application.find.mockResolvedValueOnce([{ Jobtitle: 'test' }]);

    // Act
    await getApplicationJob(request, response);

    // Assert
    expect(response.status).toHaveBeenCalledWith(201);
    expect(Application.find).toHaveBeenCalled();
  });

  it('should return a a  empty list of Application with code 201', async () => {
    Application.find.mockResolvedValueOnce([]);
    // Act
    await getApplicationJob(request, response);
    // Assert
    expect(response.status).toHaveBeenCalledWith(201);
  });
});
