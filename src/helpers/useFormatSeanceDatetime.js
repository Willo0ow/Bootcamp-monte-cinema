import { useWeekdays } from "@helpers/useWeekdays";
const weekdays = useWeekdays();

export const formatSeanceDatetime = (datetime) => {
  if (datetime) {
    const seanceDateTime = new Date(datetime);
    const day = weekdays[seanceDateTime.getDay()].fullName;
    const date = seanceDateTime.toLocaleDateString().replace(/\./g, "/");
    const time = seanceDateTime.toTimeString().slice(0, 5);
    return `${day} ${date} - ${time}`;
  }
  return "";
};
