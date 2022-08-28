export const useFormatMovieLength = () => {
  function formatMovieLength(length) {
    const hours = Math.floor(length / 60);
    const minutes = `0${length % 60}`.slice(-2);
    return `${hours}h ${minutes}min`;
  }
  return { formatMovieLength };
};
export default useFormatMovieLength;
