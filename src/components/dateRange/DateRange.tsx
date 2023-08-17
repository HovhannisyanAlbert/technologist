import React, { useState, useEffect } from "react";
import { differenceInSeconds } from "date-fns";
import styles from "./dateRangeStyle.module.css";
import DateCard from "./DateCard";
import { Typography } from "@mui/material";
import useGetTime from "../hook/useGetTime";
import DateProgressing from "./DateProgressing";

const DateRange = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [inProgress, setInProgress] = useState<boolean>(false);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [startTime, endTime] = useGetTime(startDate, endDate);

  useEffect(() => {
    const intervalProgress = setInterval(() => {
      const diffInSeconds = differenceInSeconds(new Date(), endDate);
      if (inProgress &&  diffInSeconds <= 0) {
        setElapsedTime(diffInSeconds);
      }
    }, 1000);

    return () => clearInterval(intervalProgress);
  }, [inProgress, endDate, elapsedTime]);

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(new Date(e.target.value));
  };
  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(new Date(e.target.value));
  };

  const handleStartProcess = () => {
    if (endTime > startTime) {
      setInProgress(true);
    } else {
      alert("EndTime must be big than startTime");
    }
  };

  const handleDelete = () => {
    if (isChecked) {
      setInProgress(false);
    }
  };

  return (
    <div className={styles.dateRange}>
      <DateCard
        inProgress={inProgress}
        handleStartDateChange={handleStartDateChange}
        startDate={startDate}
        handleEndDateChange={handleEndDateChange}
        endDate={endDate}
        handleStartProcess={handleStartProcess}
      />

      <div className={styles.progressing}>
        {inProgress ? (
          <Typography>
            <DateProgressing elapsedTime={elapsedTime} />
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <button onClick={handleDelete}> Delete </button>
          </Typography>
        ) : null}
      </div>
    </div>
  );
};

export default DateRange;
