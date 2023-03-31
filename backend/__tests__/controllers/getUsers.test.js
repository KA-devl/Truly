const superset = require('supertest');
const { app, server } = require('../../app');
const userModel = require('../../models/user');
const mongoose = require('mongoose');
jest.mock('../../models/user', () => ({
  find: jest.fn(),
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

it('should return a list of users', async () => {
  // Arrange
  const users = [{ name: 'John' }, { name: 'Jane' }];
  userModel.find.mockResolvedValue(users);

  // Act
  const response = await superset(app).get('/api/get-users/');

  // Assert
  expect(userModel.find).toHaveBeenCalled();
  expect(response.statusCode).toBe(201);
  expect(response.body.sucess).toBe(true);
  expect(response.body.data).toEqual(users);
});

it('should return an error message if an error occurs', async () => {
  // Arrange
  const errorMessage = 'Internal server error';
  userModel.find.mockRejectedValue(new Error(errorMessage));

  // Act
  const response = await superset(app).get('/api/get-users/');

  // Assert
  expect(userModel.find).toHaveBeenCalled();
  expect(response.statusCode).toBe(400);
  expect(response.body.sucess).toBe(false);
  expect(response.body.message).toBe(errorMessage);
});
