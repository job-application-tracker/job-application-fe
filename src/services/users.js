const url = process.env.API_URL;

export async function signUpUser({ email, password }) {
  const user = await fetch(url + '/api/v1/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify({ email, password }),
  });
  if (!user.ok) {
    throw new Error('Invalid email or password');
  }
  return await user.json();
}

export async function signInUser({ email, password }) {
  const user = await fetch(url + '/api/v1/users/sessions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify({ email, password }),
  });
  if (!user.ok) {
    throw new Error('Invalid email or password');
  }
  return await user.json();
}

export async function getUser() {
  try {
    const user = await fetch(url + '/api/v1/users/me', {
      credentials: 'include',
    });
    const userData = await user.json();
    return userData;
  } catch (error) {
    console.log(e.message);
    return null;
  }
}

export async function signOut() {
  try {
    await fetch(url + '/api/v1/users/sessions', {
      method: 'DELETE',
      credentials: 'include',
    });
  } catch (error) {
    console.log(error);
  }
}
