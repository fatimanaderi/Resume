import React, { Fragment } from "react";
import S from "../../../styles/main.module.css";

const All = (props) => {
  return (
    <Fragment>
      <div className={S.containerMain}>
        <div className={S.main}>
          {props.children}
        </div>
      </div>
    </Fragment>
  );
};

export default All;
