const axios = require('axios');

async function getWithWrongUrl() {
  try {
    await axios.get('https://jsonplaceholder.typicode.com/this-endpoint-does-not-exist');
    return { ok: true }; 
  } catch (error) {
    const status = error.response?.status;
    const message = status ? `Request failed with status ${status}` : error.message;

    return {
      ok: false,
      status: status ?? null,
      message,
    };
  }
}
async function getWithHeadersAndParams() {
  const response = await axios.get(
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

  return response.data;
}

async function fetchPostTitle(postId) {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );

    return { ok: true, title: response.data.title };
  } catch (error) {
    const status = error.response?.status ?? null;
    const message = status ? `Request failed with status ${status}` : error.message;

    return { ok: false, status, message };
  }
}


module.exports = 
{ getWithWrongUrl,
 getWithHeadersAndParams,
 fetchPostTitle,
};


