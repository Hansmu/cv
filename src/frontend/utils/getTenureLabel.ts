const MILLISECONDS_IN_A_MONTH = 2_629_746_000;

const getTenure = (startDate: string, endDate: string | null) => {
  const parsedEndDate = endDate ? new Date(endDate) : new Date();
  const durationInMilliseconds =
    parsedEndDate.getTime() - new Date(startDate).getTime();
  const durationInMonths = Math.round(
    durationInMilliseconds / MILLISECONDS_IN_A_MONTH
  );

  return {
    years: Math.floor(durationInMonths / 12),
    months: durationInMonths % 12,
  };
};

const buildTimeLabel = (unit: number, label: string) => {
  if (!unit) {
    return null;
  }

  if (unit === 1) {
    return `${unit} ${label}`;
  }

  return `${unit} ${label}s`;
};

export const getTenureLabel = (start: string, end: string | null) => {
  const tenure = getTenure(start, end);

  return [
    buildTimeLabel(tenure.years, "year"),
    buildTimeLabel(tenure.months, "month"),
  ]
    .filter(Boolean)
    .join(", ");
};
