const timeAgo = (date: string): string => {
  const now = new Date();
  const diffInMs = now.getTime() - new Date(date).getTime();
  const timeUnits = [
    {
      unit: "day",
      divisor: 86400,
      singular: "Yesterday",
      plural: " days ago",
    },
    {
      unit: "hour",
      divisor: 3600,
      singular: " hour ago",
      plural: " hours ago",
    },
    {
      unit: "minute",
      divisor: 60,
      singular: " minute ago",
      plural: " minutes ago",
    },
    {
      unit: "second",
      divisor: 1,
      singular: " second ago",
      plural: " seconds ago",
    },
  ];

  for (const unitConfig of timeUnits) {
    const unitValue = Math.floor(diffInMs / (unitConfig.divisor * 1000));
    if (unitValue >= 1) {
      return `${unitValue}${
        unitValue === 1 ? unitConfig.singular : unitConfig.plural
      }`;
    }
  }

  return "Just now";
};

export { timeAgo };
