import React from "react";
import style from "./About.module.css";

export default function Plans(props) {
  let { data } = props;
  let {features} = data;
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div className="col-md-4">
      <div className={"card " + style.card_edit}>
        <div className="card-body">
          <ul className={style.ul}>
            <li>
              <span>{data.span}</span>
            </li>
          </ul>
          <h3>{data.title}</h3>
          <hr />
          <div
            className={
              "d-flex flex-column align-content-between align-items-between " +
              style.card_he
            }
          >
            <ul className={"flex-grow-1 " + style.ul}>
              {features.map((e,i) => 
                <li  key={numbers[i]+' '}>
                  <i className="fa-solid fa-check"></i> {e}
                </li>
              )}
            </ul>
            <button className="btn btn-outline-info">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
