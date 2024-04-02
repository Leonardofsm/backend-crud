// tests/userController.test.js
const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/User');

describe('User Controller', () => {
  beforeAll(async () => {
    // Limpar a coleção de usuários antes de executar os testes
    await User.deleteMany();
  });

  it('should register a new user', async () => {
    const userData = {
      name: 'Test User',
      email: 'test@example.com',
      age: 25,
      phone: '123456789',
      password: 'password',
    };

    const response = await request(app)
      .post('/users/register')
      .send(userData);

    expect(response.status).toBe(201);
    expect(response.body).toEqual({ message: 'User registered successfully' });
  });

  it('should return error if email is already registered', async () => {
    const userData = {
      email: 'test@example.com',
    };

    const response = await request(app)
      .post('/users/register')
      .send(userData);

    expect(response.status).toBe(400);
    expect(response.body).toEqual({ message: 'Email already registered' });
  });
});


it('should get all users', async () => {
  const response = await request(app)
    .get('/users')
    .send();

  expect(response.status).toBe(200);
  expect(response.status).toEqual(200);
  expect(response.body.length).toBe(1);
  expect(response.body[0].name).toBe('Test User');
  expect(response.body[0].email).toBe('test@example.com');
    
});
