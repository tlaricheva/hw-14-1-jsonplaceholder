const axios = require('axios');
const { fetchPostTitle } = require('../src/httpClient');

jest.mock('axios');

describe('HW 15.1 - Mocking Axios in Jest', () => {
  test('should return title when request is successful', async () => {
    axios.get.mockResolvedValue({
      data: { title: 'hello world' },
    });

    const result = await fetchPostTitle(1);

    expect(result).toEqual({ ok: true, title: 'hello world' });
    expect(axios.get).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/posts/1'
    );
  });

  test('should handle error when request fails', async () => {
    axios.get.mockRejectedValue({
      response: { status: 500 },
      message: 'Server Error',
    });

    const result = await fetchPostTitle(1);

    expect(result.ok).toBe(false);
    expect(result.status).toBe(500);
    expect(result.message).toBe('Request failed with status 500');
  });
});

