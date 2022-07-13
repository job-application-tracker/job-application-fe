const url = process.env.API_USERS_URL;

export async function signUpUser({ email, password }) {
  const user = await fetch(url + '/api/v1/users', {
    method: 'POST',
    header: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify({ email, password }),
  });
  if (!user.ok) {
    throw new Error('Invalid email or password');
  }
  return await user.json();
}
