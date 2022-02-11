import React, { FC } from "react";
import { FieldError } from "react-hook-form";
import "./MySelect.css"

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
      className="select-wrapper"
    >
      <label
        className="select-wrapper__label"
      >
        {title}
      </label>
      <select
        {...register}
        className="select-wrapper__select"
        placeholder={placeholder}
        onSelect={onSelect}
        defaultValue={defaultValue}
      >
        {options.map((option: any) => (
          <option key={option.slug} value={option.slug}>
            {option.name}
          </option>
        ))}
      </select>
      <div>{errors && <span>This field is required</span>}</div>
    </div>
  );
};

export default MySelect;
