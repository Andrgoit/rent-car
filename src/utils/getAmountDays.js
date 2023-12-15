const getAmountDays = (startDate, endDate) => {
  const res = endDate?.getTime() - startDate?.getTime();
  if (res > 0) {
    const days = res / (1000 * 60 * 60 * 24);
    return days;
  } else {
    return null;
  }
};

export default getAmountDays;
