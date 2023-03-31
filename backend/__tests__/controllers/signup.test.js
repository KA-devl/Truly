const { signUpUserController } = require('../../controllers/user/createUser');
const user = require('../../models/user');

jest.mock('../../models/user');

//mock request
const request = {
  body: {
    name: 'Lucas podolski',
    email: 'lucas.pod@desjardins.ca',
    username: 'Desjardins',
    password: 'Test123',
    mobileNumber: '514-324-6542',
    userType: 'employer',
  },
};
//mock response
const response = {
  status: jest.fn((x) => x),
  send: jest.fn((x) => x),
};

//***DO NOT CALL DATABASE FOR UNIT TESTS, CREATE MOCK DATA FOR EVERYTTHING***
it('should send a status code of 400 when user exists', async () => {
  user.findOne.mockImplementationOnce(() => ({
    email: 'bawspvp@gmail.com',
    password: 'passswordddddd',
  }));
  await signUpUserController(request, response);
  expect(response.status).toHaveBeenCalledWith(400);
  expect(response.send).toHaveBeenCalledTimes(1);
});

it('should send a status 201 when a new user is created', async () => {
  user.findOne.mockImplementationOnce(() => undefined);
  user.create.mockImplementationOnce(() => request.body);
  await signUpUserController(request, response);

  //assertions
  expect(user.create).toHaveBeenCalledWith(request.body);
  expect(response.status).toHaveBeenCalledWith(201);
  expect(response.send).toHaveBeenCalledTimes(1);
});
