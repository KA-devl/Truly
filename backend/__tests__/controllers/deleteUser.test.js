const userModel = require('../../models/user');
const { deleteUser } = require('../../controllers/admin/deleteUser');

jest.mock('../../models/user', () => ({
  find: jest.fn(),
  findById: jest.fn((x) => x),
  remove: jest.fn((x) => x),
}));
jest.mock('../../config/cloudinary');

jest.mock('cloudinary', () => ({
  v2: {
    config: jest.fn(),
    uploader: {
      destroy: jest.fn(),
    },
  },
}));

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

  it('should delete a user successfully', async () => {
    userModel.findById.mockResolvedValueOnce(user);
    userModel.remove.mockResolvedValueOnce(user);

    await deleteUser(request, response);

    expect(response.status).toHaveBeenCalledWith(201);
  });

  it('should return an error if the user is not found', async () => {
    userModel.findById.mockResolvedValueOnce(null);
    userModel.remove.mockResolvedValueOnce(user);
    await deleteUser(request, response);

    expect(response.status).toHaveBeenCalledWith(400);
  });
});
