import React, { FC, HTMLInputTypeAttribute } from "react";
import { FieldError } from "react-hook-form";
import { InputType } from "zlib";
import "./MyInput.css"

interface IMyInputProps {
  value?: string;
  onChange?: any;
  placeholder?: string;
  title?: string;
  disabled?: boolean;
  style?: any;
  register?: any;
  errors?: FieldError;
  type?: HTMLInputTypeAttribute;
}

const MyInput: FC<IMyInputProps> = ({
  value,
  onChange,
  placeholder,
  title,
  disabled,
  style,
  register,
  errors,
  type,
}) => {
  const onInput = (e: any) => {
    onChange && onChange(e.target.value);
  };
  return (
    <div style={{ display: "inline-block", float: "left", width: "100%" }}>
      <label
        className="label"
      >
        {title}
      </label>
      <input
        {...register}
        className="input"
        style={{
          ...style,
        }}
        type={type}
        placeholder={placeholder}
        value={value}
        onInput={onInput}
        autoComplete="off"
      />
      <div>{errors && <span>This field is required</span>}</div>
    </div>
  );
};

export default MyInput;
