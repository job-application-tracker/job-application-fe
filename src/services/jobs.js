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

export async function updateJob(id, state, index) {
  const requestUrl = `${url}/api/v1/trackers/${id}`;
  const requestInfo = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify({ index, ...state }),
  };
  const updatedData = await fetch(requestUrl, requestInfo);

  console.log('resp', updatedData);
  if (!updatedData.ok) {
    throw new Error(`Error fetching job with id: ${id}`);
  }
  const job = await updatedData.json();
  return job;
}
export async function createJob(formData) {
  const requestUrl = `${url}/api/v1/trackers`;
  // todo: change hardcoded index
  const requestInfo = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify({ ...formData, index: 0 }),
  };
  const newJob = await fetch(requestUrl, requestInfo);

  if (!newJob.ok) {
    throw new Error(`Error creating a job.`);
  }
  const job = await newJob.json();
  return job;
}
