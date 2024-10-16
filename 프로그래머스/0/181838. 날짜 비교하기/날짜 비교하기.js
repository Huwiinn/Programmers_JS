function solution(date1, date2) {
  const newDate1 = new Date(date1);
  const newDate2 = new Date(date2);

  if (newDate1.getTime() < newDate2.getTime()) {
    return 1;
  } else {
    return 0;
  }
}