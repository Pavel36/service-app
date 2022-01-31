export const dateCustomFormatter = (dateISOString: string) => {
  let date = new Date(dateISOString);
  let month;
  let day;
  date.getDay() + 1 < 10
    ? (day = `0${date.getDay() + 1}`)
    : (day = date.getDay() + 1);
  date.getMonth() + 1 < 10
    ? (month = `0${date.getMonth() + 1}`)
    : (month = date.getMonth() + 1);

  let year = date.getFullYear();

  return `${day}/${month}/${year}`;
};
