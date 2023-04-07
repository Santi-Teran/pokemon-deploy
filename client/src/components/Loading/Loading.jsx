import React from "react";
import style from "./Loading.module.css";

const Loading = () => {
    return (
        <div className={style.container}>
            <span className={style.loader}></span>
        </div>
    );
};

export default Loading;