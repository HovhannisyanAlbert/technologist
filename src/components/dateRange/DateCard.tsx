import React, { FC } from "react";
import { dateCardProps } from "./type";
import { TextField } from "@mui/material";
import { format } from "date-fns";
import styles from "./dateRangeStyle.module.css"
import Button from "@mui/material/Button";
const DateCard: FC<dateCardProps> = (props) => {
  const {
    inProgress,
    handleStartDateChange,
    startDate,
    handleEndDateChange,
    endDate,
    handleStartProcess,
  } = props;

  return (
    <div className={styles.dateCard}>
      <TextField
        label="Start Date"
        type="datetime-local"
        value={format(startDate, "yyyy-MM-dd'T'HH:mm")}
        onChange={handleStartDateChange}
        disabled={inProgress}
        inputProps={{
          min: format(new Date(), "yyyy-MM-dd'T'HH:mm"),
        }}
      />
      <TextField
        label="End Date"
        type="datetime-local"
        value={format(endDate, "yyyy-MM-dd'T'HH:mm")}
        onChange={handleEndDateChange}
        disabled={inProgress}
        inputProps={{
          min: format(new Date(), "yyyy-MM-dd'T'HH:mm"),
        }}
      />
      <Button variant="contained" color="success" onClick={handleStartProcess}>
        Start
      </Button>
    </div>
  );
};

export default DateCard;



