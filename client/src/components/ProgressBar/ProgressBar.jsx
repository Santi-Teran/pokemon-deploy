import React from "react";
import style from "./ProgressBar.module.css";

const ProgressBar = ({ value }) => {

    const fillColor =
        value <= 50
            ? "#27c918"
            : value > 50 && value <= 100
            ? "#c9c618"
            : value > 100 && value <= 150
            ? "#c97618"
            : "#c91818"

    return (
        <div className={style.ProgressBar}>
            <div className={style.ProgressBarFill} style={{ width: value + 60, backgroundColor: fillColor }}></div>
        </div>
  );
};

export default ProgressBar;