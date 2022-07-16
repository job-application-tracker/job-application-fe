const url = process.env.API_URL;

export async function getAchievementsByWeek(year, week) {
  try {
    const achievements = await fetch(url + `/api/v1/achievements/week?year=${year}&week=${week}`, {
      credentials: 'include',
    });
    if (achievements.status !== 404) {
      const achievementsData = await achievements.json();
      console.log('achievementsData', achievementsData);
      return achievementsData;
    } else {
      const newAchievements = await newAchievementsWeek(year, week);
    }
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

async function newAchievementsWeek(year, week) {
  try {
    const achievements = await fetch(url + '/api/v1/achievements', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify({ year, week }),
    });
  } catch (error) {
    console.log(error.message);
    return null;
  }
}