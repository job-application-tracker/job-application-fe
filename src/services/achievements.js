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
    console.log('achievementsData', achievementsData);
    return achievementsData;
  } catch (error) {
    console.log(error.message);
    return null;
  }
}
