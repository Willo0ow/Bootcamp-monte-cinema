export const formatMovieLength = (length) => {
  const hours = Math.floor(length / 60);
  const minutes = `0${length % 60}`.slice(-2);
  return minutes === "00" ? `${hours}h` : `${hours}h ${minutes}min`;
};
