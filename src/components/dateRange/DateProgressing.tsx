import React, { FC, useState } from "react";

import { dateProgressingPropsType } from "./type";
const DateProgressing: FC<dateProgressingPropsType> = (props) => {
  const { elapsedTime } = props;

  
  return (
    <div>
      Elapsed Time: {Math.floor(elapsedTime / (24 * 3600))}d:
      {Math.floor((elapsedTime % (24 * 3600)) / 3600)}HH:
      {Math.floor((elapsedTime % 3600) / 60)}mm:
      {elapsedTime % 60}ss
    </div>
  );
};

export default DateProgressing;
