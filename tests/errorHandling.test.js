const { getWithWrongUrl } = require('../src/httpClient');

describe('HW 15.1 - Error handling', () => {
  test('should handle error for wrong URL and return proper message', async () => {
    const result = await getWithWrongUrl();

    expect(result.ok).toBe(false);
    expect(result.status).toBe(404);
    expect(result.message).toBe('Request failed with status 404');
  });
});
