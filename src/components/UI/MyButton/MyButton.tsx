import React, { FC } from "react";
import "./MyButton.css"

export enum ButtonType {
  button = "button",
  submit = "submit",
  reset = "reset",
}

interface IMyButtonProps {
  value: string;
  type?: ButtonType;
  onClick?: () => void;
  disabled?: boolean;
  style?: any;
}

const MyButton: FC<IMyButtonProps> = ({
  value,
  type,
  onClick,
  disabled,
  style,
}) => {
  return disabled ? (
    <button
      style={{
        ...style,
      }}
      className="button_disabled"
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {value}
    </button>
  ) : (
    <button
      style={{
        ...style,
      }}
      className="button_enabled"
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default MyButton;
