import React, { FC } from "react";

export enum ButtonColor {
  submit = "submit",
  cancel = "cancel",
  danger = "danger",
}

export enum ButtonType {
  button = "button",
  submit = "submit",
  reset = "reset",
}

interface IMyButtonProps {
  value: string;
  type?: ButtonType;
  variant?: ButtonColor;
  onClick?: () => void;
  disabled?: boolean;
  style?: StyleSheet;
}

const MyButton: FC<IMyButtonProps> = ({
  value,
  type,
  variant = ButtonType.submit,
  onClick,
  disabled,
  style,
}) => {
  return (
    <button
      style={{
        color: "#FFF",
        backgroundColor: "#7DB59A",
        borderRadius: "16px",
        cursor: "pointer",
        border: "none",
        fontSize: 18,
        padding: "10px 20px",
        ...style,
      }}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default MyButton;
