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

export function getTimeAgo(dateString: string): string {
  const currentDate = new Date();
  const pastDate = new Date(dateString);

  const timeDifferenceInSeconds = Math.floor((currentDate.getTime() - pastDate.getTime()) / 1000);

  if (timeDifferenceInSeconds < 60) {
    return `${timeDifferenceInSeconds}s`;
  } else if (timeDifferenceInSeconds < 3600) {
    const minutes = Math.floor(timeDifferenceInSeconds / 60);
    return `${minutes}m`;
  } else if (timeDifferenceInSeconds < 86400) {
    const hours = Math.floor(timeDifferenceInSeconds / 3600);
    return `${hours}h`;
  } else if (timeDifferenceInSeconds < 2592000) {
    const days = Math.floor(timeDifferenceInSeconds / 86400);
    return `${days}d`;
  } else {
    // If it's been more than a month, switch to an absolute date format
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return pastDate.toLocaleDateString(undefined, options);
  }
}