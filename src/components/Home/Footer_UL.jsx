import React from "react";
import style from './Footer_UL.module.css'
import Ul_display from './../Layout/Ul_display';

export default function Footer_UL(props) {
  let {data } = props;
  return (
    <div className="col-md-3">
      <div className={style.item}>
        <Ul_display  data={data} />
      </div>
    </div>  
  );
}
