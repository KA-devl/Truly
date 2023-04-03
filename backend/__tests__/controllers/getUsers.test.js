const { getUsers } = require('../../controllers/admin/getUsers');
const userModel = require('../../models/user');

jest.mock('../../models/user');
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

describe('deleteUser', () => {
  const user = {
    avatar: {
      imageUrl:
        'https://res.cloudinary.com/dvjusr5op/image/upload/v1680203613/rdcjvqf7qx1mkfzrzwmb.png',
      cloudinaryId: 'rdcjvqf7qx1mkfzrzwmb',
    },
    resume: {
      resumeUrl:
        'https://res.cloudinary.com/dvjusr5op/image/upload/v1680279699/cijfh26m9uacsi2lnag5.pdf',
      cloudinaryId: 'cijfh26m9uacsi2lnag5',
    },
    _id: '63eeaf101477a9f573ae6c12',
    name: 'Anes kdzrr',
    email: 'test123@liets.com',
    username: 'bawspvp',
    password: 'Test123',
    mobileNumber: '514-999-9699',
    userType: 'candidate',
    createdAt: '2023-02-16T22:32:48.455Z',
    __v: 0,
    imgProfileUrl: '',
    jobPost: [],
    jobApplication: [],
  };

  it('should return a list of users', async () => {
    userModel.find.mockResolvedValueOnce([user]);

    // Act
    await getUsers(request, response);

    // Assert
    expect(response.status).toHaveBeenCalledWith(201);
    expect(userModel.find).toHaveBeenCalled();
  });

  it('should return a code 201 if there is no user', async () => {
    userModel.find.mockResolvedValueOnce([]);
    // Act
    await getUsers(request, response);
    // Assert
    expect(response.status).toHaveBeenCalledWith(201);
  });
});
