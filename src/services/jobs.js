const url = process.env.API_URL;

export async function fetchJobs() {
  const jobs = await fetch(url + '/api/v1/trackers', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
  });
  if (!jobs.ok) {
    throw new Error('Error fetching jobs');
  }

  return await jobs.json();
}
