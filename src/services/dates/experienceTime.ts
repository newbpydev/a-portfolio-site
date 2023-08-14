//* COMPONENT: ExperienceTime
export function ExperienceTime(dateStr: string) {
  const startingDate = new Date(dateStr);
  const currentDate = new Date();
  const timeDifferenceMs = currentDate - startingDate;

  const timeDifferenceDays = Math.floor(
    timeDifferenceMs / (1000 * 60 * 60 * 24)
  );

  const yearsDifference = Math.floor(timeDifferenceDays / 365);
  const monthsDifference = Math.floor((timeDifferenceDays % 365) / 30);
  const daysDifference = Math.floor(timeDifferenceDays % 30);

  const yearOutput = yearsDifference
    ? `${yearsDifference} Year${yearsDifference > 1 ? "s" : ""}`
    : "";
  const monthOutput = monthsDifference
    ? `${monthsDifference} Month${monthsDifference > 1 ? "s" : ""}`
    : "";

  const output = yearsDifference
    ? monthOutput
      ? `${yearOutput} and ${monthOutput}`
      : yearOutput
    : monthsDifference
    ? monthOutput
    : `${daysDifference} Days`;

  return output + " Experience";
}
