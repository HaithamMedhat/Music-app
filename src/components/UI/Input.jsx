import React from "react";
import style from './Input.module.css';
const Input = React.forwardRef((props, ref) => {
  return (
    <div className="container">
      <div className="row">
        <div className="m-3">
          <label className={"col-md-4 "+ style.label_s} htmlFor={props.id}>
            {props.label}
          </label>
          <input
            className={"col-md-6 " + style.input_s}
            type={props.type}
            id={props.id}
            ref={ref}
            required
          />
        </div>
      </div>
    </div>
  );
});

export default Input;
