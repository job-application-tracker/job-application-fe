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

export async function updateJob({ id, status }, index) {
  const requestUrl = `${url}/api/v1/trackers/${id}`;
  const requestInfo = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify({ index, status }),
  };
  const updatedData = await fetch(requestUrl, requestInfo);

  console.log('resp', updatedData);
  if (!updatedData.ok) {
    throw new Error(`Error fetching job with id: ${id}`);
  }
  const job = await updatedData.json();
  return job;
}
