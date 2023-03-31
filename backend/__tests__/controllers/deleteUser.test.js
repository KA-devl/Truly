const request = require('supertest');
const { app, server } = require('../../app');
const mongoose = require('mongoose');
const userModel = require('../../models/user');

jest.mock('../../models/user');
jest.mock('../../config/cloudinary');

jest.mock('cloudinary', () => ({
  v2: {
    config: jest.fn(),
    uploader: {
      destroy: jest.fn(),
    },
  },
}));

afterEach(() => {
  jest.clearAllMocks();
});

afterAll(async () => {
  await server.close();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('deleteUser', () => {
  it('should delete a user successfully', async () => {
    const user = {
      _id: '123',
      resume: { cloudinaryId: 'resume123' },
      avatar: { cloudinaryId: 'avatar123' },
      remove: jest.fn(),
    };
    userModel.findById.mockResolvedValue(user);

    const response = await request(app).delete('/api/delete-user/123');

    expect(userModel.findById).toHaveBeenCalledWith('123');
    expect(user.remove).toHaveBeenCalled();
    expect(response.status).toBe(201);
    expect(response.body.sucess).toBe(true);
    expect(response.body.message).toBe('User with id 123 has been deleted');
  });

  it('should return an error if the user is not found', async () => {
    userModel.findById.mockResolvedValue(null);

    const response = await request(app).delete('/api/delete-user/123');

    expect(userModel.findById).toHaveBeenCalledWith('123');
    expect(response.status).toBe(400);
    expect(response.body.sucess).toBe(false);
    expect(response.body.message).toBe('The user id is invalid');
  });

  it('should return an error if the user id is invalid', async () => {
    userModel.findById.mockRejectedValue(new Error('Invalid user id'));

    const response = await request(app).delete('/api/delete-user/invalid');

    expect(userModel.findById).toHaveBeenCalledWith('invalid');
    expect(response.status).toBe(400);
    expect(response.body.sucess).toBe(false);
    expect(response.body.message).toBe('The user id is invalid');
  });
});
