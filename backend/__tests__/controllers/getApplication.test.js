const { getApplication } = require('../../controllers/employer/getApplication');
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
    await getApplication(request, response);

    // Assert
    expect(response.status).toHaveBeenCalledWith(201);
    expect(Application.find).toHaveBeenCalled();
  });

  it('should return a a  empty list of Application with code 201', async () => {
    Application.find.mockResolvedValueOnce([]);
    // Act
    await getApplication(request, response);
    // Assert
    expect(response.status).toHaveBeenCalledWith(201);
  });
});
