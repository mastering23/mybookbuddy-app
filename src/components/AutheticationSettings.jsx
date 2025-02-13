
export const authenticateUser = async (type, data) => {
  const baseUrl = 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com';
  const uri = type === 'login' ? '/api/users/login' : '/api/users/register';
  try {
    const response = await fetch(`${baseUrl}${uri}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (result.token) {
      localStorage.setItem('token', result.token);  // Save token to localStorage
    }
    return result;
  } catch (error) {
    console.error('Error:', error);
  }
};
