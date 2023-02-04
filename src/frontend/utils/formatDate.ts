const DATE_FORMATTER = Intl.DateTimeFormat("en-GB", {
  month: "short",
  year: "numeric",
});

export const formatDate = (date: string | null) => {
  if (!date) {
    return "Present";
  }

  return DATE_FORMATTER.format(new Date(date));
};
