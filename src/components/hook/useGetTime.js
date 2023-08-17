const useGetTime = (startDate, endDate) => {
  let start = startDate;
  let end = endDate;

  let startTime = Number(start.toString().replace(/:/g, "").split(" ")[4]);
  let endTime = Number(end.toString().replace(/:/g, "").split(" ")[4]);

  return [startTime, endTime]
};

export default useGetTime;
