export const calculatePercent = (complete, total) => {
  console.log('complete', complete);
  console.log('total', total);
  const percent = Math.round((complete / total) * 100);
  console.log('percent', percent);
  return percent;
};
