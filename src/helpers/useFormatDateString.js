import { useWeekdays } from "@helpers/useWeekdays";
const weekdays = useWeekdays();

export const formatDateString = (date) => {
  return `${weekdays[date.getDay()].fullName} ${date
    .toLocaleDateString()
    .replace(/\./g, "/")}`;
};
