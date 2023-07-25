export const formatDate = (dateSql) => {
  const dateObj = new Date(dateSql);
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  const newDate = dateObj.toLocaleDateString("fr-FR", options);
  return newDate;
};

export default formatDate;
