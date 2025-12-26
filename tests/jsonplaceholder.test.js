const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

describe('JSONPlaceholder API tests', () => {
  test('GET /posts returns list of posts', async () => {
    const response = await axios.get(`${BASE_URL}/posts`);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data[0]).toHaveProperty('id');
    expect(response.data[0]).toHaveProperty('title');
  });

  test('GET /posts/1 returns single post', async () => {
    const response = await axios.get(`${BASE_URL}/posts/1`);

    expect(response.status).toBe(200);
    expect(response.data.id).toBe(1);
    expect(response.data).toHaveProperty('userId');
    expect(response.data).toHaveProperty('body');
  });

  test('GET /users returns users list', async () => {
    const response = await axios.get(`${BASE_URL}/users`);

    expect(response.status).toBe(200);
    expect(response.data[0]).toHaveProperty('email');
    expect(response.data[0]).toHaveProperty('username');
  });

  test('POST /posts creates new post', async () => {
    const response = await axios.post(`${BASE_URL}/posts`, {
      title: 'test title',
      body: 'test body',
      userId: 1,
    });

    expect(response.status).toBe(201);
    expect(response.data.title).toBe('test title');
    expect(response.data.body).toBe('test body');
  });

  test('POST /comments creates new comment', async () => {
    const response = await axios.post(`${BASE_URL}/comments`, {
      postId: 1,
      name: 'test name',
      email: 'test@test.com',
      body: 'test comment',
    });

    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('id');
    expect(response.data.email).toBe('test@test.com');
  });
});

