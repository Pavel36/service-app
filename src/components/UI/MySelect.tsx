import React from "react";

const MySelect = (props: any) => {
  return (
    <div
      style={{
        display: "inline-block",
        float: "left",
        width: "100%",
      }}
    >
      <label
        style={{
          display: "block",
          fontWeight: 600,
          fontSize: "12px",
          color: "#ADADAD",
          letterSpacing: "2.5px",
        }}
      >
        {props.title}
      </label>
      <select
        {...props.register}
        style={{
          background: "#F0F0F0",
          borderRadius: "16px",
          padding: 13,
          border: "none",
          outline: "none",
          width: "100%",
        }}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        onSelect={props.onSelect}
      >
        {props.options.map((option: any) => (
          <option key={option.slug} value={option.slug}>
            {option.name}
          </option>
        ))}
      </select>
      <div>{props.errors && <span>This field is required</span>}</div>
    </div>
  );
};

export default MySelect;
