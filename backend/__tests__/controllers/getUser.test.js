const { getUser } = require('../../controllers/user/getUser');
const User = require('../../models/user');

jest.mock('../../models/user');

describe('getUser', () => {
  const mockUser = {
    _id: 'mockUserId',
    name: 'John Doe',
    jobApplication: [],
    jobPost: [],
  };

  const mockRequest = {
    params: {
      id: mockUser._id,
    },
  };

  const mockResponse = {
    status: jest.fn(() => mockResponse),
    json: jest.fn(),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return a 400 error if an error occurs', async () => {
    // Mock the `findById` method to throw an error
    const mockError = new Error('Database error');
    User.findById.mockImplementationOnce(() => {
      throw mockError;
    });

    await getUser(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(400);
  });
});
