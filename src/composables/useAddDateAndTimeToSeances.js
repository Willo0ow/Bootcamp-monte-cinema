export const useAddDateAndTimeToSeances = () => {
  function addDateAndTimeToSeances(seances) {
    return seances.map((seance) => {
      const date = seance.datetime.split("T")[0];
      const time = seance.datetime.split("T")[1].slice(0, 5);
      return { ...seance, date, time };
    });
  }
  return { addDateAndTimeToSeances };
};
export default useAddDateAndTimeToSeances;
