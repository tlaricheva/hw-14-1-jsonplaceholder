const axios = require('axios');
const { getWithHeadersAndParams } = require('../src/httpClient');

jest.mock('axios');

describe('HW 15.1 - Headers and Params', () => {
  test('should send request with correct headers and params', async () => {
    axios.get.mockResolvedValue({
      data: [],
    });

    await getWithHeadersAndParams();

    expect(axios.get).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/posts',
      {
        headers: {
          'X-Test-Header': 'test-header-value',
        },
        params: {
          userId: 1,
        },
      }
    );
  });
});
