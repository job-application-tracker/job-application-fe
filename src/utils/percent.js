export const calculatePercent = (complete, total) => {
  const percent = Math.round((complete / total) * 100);
  return percent;
};
