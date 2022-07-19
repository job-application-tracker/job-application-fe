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
  } catch (e) {
    console.log(e.message);
    return null;
  }
}

export async function getCurrentGoals() {
  try {
    const user = await fetch(url + '/api/v1/users/currentGoals', {
      credentials: 'include',
    });
    const userData = await user.json();
    return userData;
  } catch (e) {
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

export async function userGoalsUpdate(id, goals) {
  const data = await fetch(url + `/api/v1/users/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify(goals),
  });
  if (!data.ok) {
    throw new Error('Please sign in to update your goals.');
  }
  const goalsData = await data.json();
  return goalsData;
}
