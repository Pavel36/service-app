import React, { FC } from "react";

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
  return (
    <>
      {disabled ? (
        <button
          style={{
            color: "#FFF",
            backgroundColor: "#B5D3C5",
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
      ) : (
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
      )}
    </>
  );
};

export default MyButton;
