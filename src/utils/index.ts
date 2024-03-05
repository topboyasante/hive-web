export const calculateAge = (date: Date) => {
  const birthdateDate = new Date(date);
  const currentDate = new Date();

  let age = currentDate.getFullYear() - birthdateDate.getFullYear();

  if (
    currentDate.getMonth() < birthdateDate.getMonth() ||
    (currentDate.getMonth() === birthdateDate.getMonth() &&
      currentDate.getDate() < birthdateDate.getDate())
  ) {
    age--;
  }

  return age;
};
