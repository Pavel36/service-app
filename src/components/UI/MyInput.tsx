import { Grid, Input } from "@mui/material";
import React from "react";

const MyInput = (props: any) => {
  return (
    <div style={{ display: "inline-block", float: "left", width: "100%" }}>
      <label style={{ display: "block" }}>{props.title}</label>
      <input
        {...props.register}
        style={{
          background: "#C2C2C2",
          borderRadius: "16px",
          border: "none",
          padding: 13,
          outline: "none",
          width: "100%",
        }}
        placeholder={props.placeholder}
        value={props.value}
        onInput={(val: any) => {
          console.log(val.target.value);
          props.onChange(val.target.value);
        }}
      />
      <div>{props.errors && <span>This field is required</span>}</div>
    </div>
  );
};

export default MyInput;
