const url = process.env.API_URL;

export async function getAchievementsByWeek(year, week) {
  try {
    const achievements = await fetch(
      url + `/api/v1/achievements/week?year=${year}&week=${week}`,
      {
        credentials: 'include',
      }
    );
    const achievementsData = await achievements.json();
    return achievementsData;
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

export async function updateAchievements(year, week, attrs) {
  const update = await fetch(
    url + `/api/v1/achievements/week?year=${year}&week=${week}`,
    {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify(attrs),
    }
  );
  if (!update.ok) {
    throw new Error('Invalid');
  }
  return await update.json();
}

export async function fetchSumAchievements() {
  try {
    const weeks = await fetch(url + '/api/v1/achievements', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
    });
    const achievementsData = await weeks.json();
    return achievementsData;
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

export async function fetchTotalAchievements() {
  try {
    const sums = await fetch(url + '/api/v1/achievements/sums', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
    });
    const totalsData = await sums.json();
    return totalsData;
  } catch (error) {
    console.log(error.message);
    return null;
  }
}
