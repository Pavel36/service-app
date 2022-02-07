import React, { FC } from "react";
import { FieldError } from "react-hook-form";

interface IMySelectProps {
  title?: string;
  register?: any;
  errors?: FieldError;
  placeholder?: string;
  onSelect?: any;
  defaultValue?: string;
  options?: any;
}

const MySelect: FC<IMySelectProps> = ({
  title,
  register,
  errors,
  placeholder,
  onSelect,
  defaultValue,
  options,
}) => {
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
        {title}
      </label>
      <select
        {...register}
        style={{
          background: "#F0F0F0",
          borderRadius: "16px",
          padding: 13,
          border: "none",
          outline: "none",
          width: "100%",
        }}
        placeholder={placeholder}
        onSelect={onSelect}
        defaultValue={defaultValue}
      >
        {options.map((option: any) => (
          <option
            key={option.slug}
            value={option.slug}
          >
            {option.name}
          </option>
        ))}
      </select>
      <div>{errors && <span>This field is required</span>}</div>
    </div>
  );
};

export default MySelect;
